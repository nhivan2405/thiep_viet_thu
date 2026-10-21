import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const port = Number(process.env.PORT) || 3000;
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.ico':'image/x-icon', '.mp4':'video/mp4', '.mp3':'audio/mpeg', '.wav':'audio/wav', '.woff2':'font/woff2' };
function respond(res, status, body, type='text/plain; charset=utf-8') {
  res.writeHead(status, {'Content-Type':type, 'X-Content-Type-Options':'nosniff'});
  res.end(body);
}
const server = http.createServer((req,res) => {
  const method = req.method || 'GET';
  if(method !== 'GET' && method !== 'HEAD') return respond(res,405,'Method not allowed');
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { return respond(res,400,'Bad request'); }
  if(pathname === '/api/health') return respond(res,200,JSON.stringify({ok:true,service:'ro-be-four-letters'}),'application/json; charset=utf-8');
  if(pathname === '/api/config') return respond(res,200,JSON.stringify({letters:4,photos:13,musicFormat:'mp4'}),'application/json; charset=utf-8');
  if(pathname.startsWith('/api/')) return respond(res,404,'Not found');
  const safePath = path.resolve(dist, '.' + pathname);
  if(safePath !== dist && !safePath.startsWith(dist + path.sep)) return respond(res,403,'Forbidden');
  let target = safePath;
  try { if (!fs.statSync(target).isFile()) target = path.join(dist,'index.html'); }
  catch { if (path.extname(pathname)) return respond(res,404,'Not found'); target = path.join(dist,'index.html'); }
  let stat;
  try { stat=fs.statSync(target); }
  catch { return respond(res,503,'Frontend chưa được build. Chạy npm run build trước.'); }
  const ext=path.extname(target).toLowerCase();
  const headers={'Content-Type':mime[ext] || 'application/octet-stream','Content-Length':stat.size,'X-Content-Type-Options':'nosniff','Cache-Control':ext==='.html'?'no-cache':'public, max-age=3600'};
  // Byte-range responses let mobile browsers stream MP4 files correctly.
  const range = req.headers.range;
  if(range && ext === '.mp4') {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if(match) {
      const start=match[1] ? Number(match[1]) : 0;
      const end=match[2] ? Math.min(Number(match[2]), stat.size-1) : stat.size-1;
      if(start < 0 || end < start || start >= stat.size) return respond(res,416,'Range not satisfiable');
      res.writeHead(206,{...headers,'Accept-Ranges':'bytes','Content-Range':`bytes ${start}-${end}/${stat.size}`,'Content-Length':end-start+1});
      if(method === 'HEAD') return res.end();
      fs.createReadStream(target,{start,end}).pipe(res);
      return;
    }
  }
  res.writeHead(200,headers);
  if(method==='HEAD') return res.end();
  fs.createReadStream(target).on('error',()=>res.destroy()).pipe(res);
});
server.listen(port,'0.0.0.0',()=>console.log(`Website ready on port ${port}`));
