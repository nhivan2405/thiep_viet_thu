import React, { useEffect, useRef, useState } from 'react';

const letters = [
  {
    balloon: '♡',
    label: 'Lời tâm sự xin lỗi',
    title: 'Rô xin lỗi bé nhiều lắm ♡',
    body: [
      'Bé ơi, có lẽ Rô là một người không giỏi trong việc nói ra những điều mình nghĩ và cảm nhận. Đôi lúc những lời Rô nói ra lại vô tình khiến bé buồn, khiến bé phải suy nghĩ và nhạy cảm nhiều hơn. Rô biết có những lúc cách nói chuyện của Rô hơi quá đáng với bé, dù thật lòng Rô chẳng hề muốn như vậy.',

      'Thật sự, những lúc Rô nói ra những điều đó, Rô không hề có ý trách bé hay nghĩ rằng mọi chuyện là do bé đâu. Nhưng Rô nhận ra chính cách nói của mình lại khiến bé hiểu rằng Rô đang trách bé, khiến bé cảm thấy bản thân có lỗi. Rô thương bé nhiều như vậy thì làm sao Rô nỡ trách bé được chứ. Qua giờ Rô đã suy nghĩ rất nhiều và cũng tự trách bản thân lắm, vì có những lúc Rô chỉ biết nói ra cảm xúc của mình mà quên mất phải để ý xem những lời đó sẽ khiến bé cảm thấy như thế nào.',

      'Bé biết hong, mỗi lần thấy bé khóc, Rô buồn lắm á. Rô thương bé, nhưng nhiều khi chính Rô lại là người khiến bé phải rơi nước mắt. Điều đó làm Rô cảm thấy có lỗi rất nhiều. Rô cứ nghĩ mãi tại sao mình thương bé nhiều như vậy mà đôi lúc lại chẳng biết cách nói chuyện để bé cảm thấy được yêu thương và thoải mái hơn.',

      'Thật ra Rô luôn muốn bé tâm sự với Rô nhiều hơn. Rô muốn được nghe bé kể những chuyện vui, chuyện buồn, những điều bé đang suy nghĩ hay cả những chuyện nhỏ nhặt trong ngày. Nhưng có những lúc bé không muốn kể, Rô cũng hiểu phần nào tại sao. Có lẽ Rô vẫn chưa tạo cho bé đủ sự tin tưởng và cảm giác an toàn để bé có thể thoải mái nói hết những điều trong lòng mình.',

      'Nhưng bé ơi, Rô thật sự là một người rất thích được nghe bé tâm sự đó. Rô biết mình không giỏi giang gì, không phải chuyện gì cũng biết, cũng chẳng phải lúc nào Rô cũng có thể giải quyết hay chữa lành những nỗi buồn của bé. Nhưng chỉ cần bé chịu nói, Rô sẽ cố gắng tìm cách, nếu chưa biết thì Rô sẽ học, nếu chưa hiểu thì Rô sẽ tìm hiểu. Rô không cần phải là người biết tất cả mọi thứ, Rô chỉ muốn trở thành một người mà bé có thể tin tưởng để chia sẻ mọi chuyện thôi.',

      'Rô cũng biết hai đứa mình đôi khi chẳng có nhiều điểm chung. Có những điều bé thích, những chuyện bé quan tâm mà Rô chưa hiểu hết, nên có lẽ bé cũng chẳng biết phải kể với Rô như thế nào. Nhưng Rô muốn học cách hiểu bé nhiều hơn mà. Rô muốn biết bé thích gì, bé đang nghĩ gì, điều gì khiến bé vui và điều gì làm bé buồn. Rô không muốn bé phải giữ mọi chuyện trong lòng chỉ vì nghĩ rằng Rô sẽ không hiểu.',

      'Thật sự mấy hôm nay Rô suy nghĩ nhiều lắm. Rô cứ sợ rằng nếu bé phải khóc nhiều như vậy, phải nhạy cảm và suy nghĩ quá nhiều khi ở bên cạnh Rô, thì một ngày nào đó bé sẽ cảm thấy mệt mỏi, không còn thoải mái nữa rồi dần dần xa Rô. Nghĩ tới đó thôi Rô đã sợ lắm rồi. Rô không muốn tình bạn mà Rô trân trọng lại trở thành điều khiến bé phải buồn nhiều hơn là vui.',

      'Tối qua, chỉ vì nghĩ đến cảnh một ngày nào đó Rô với bé không còn ở bên nhau nữa mà Rô đã òa khóc. Rô cũng không hiểu sao mình lại khóc nhiều đến vậy. Rô cứ nghĩ đến tương lai, nghĩ đến năm sau, rồi những năm sau nữa, lỡ như lúc đó hai đứa không còn đi cùng nhau thì sao. Lỡ như những nơi Rô muốn đi cùng bé, những chuyện Rô muốn làm cùng bé, sau này lại chẳng còn bé ở đó nữa thì sao. Chỉ mới tưởng tượng thôi mà Rô đã không chịu nổi rồi.',

      'Có một lúc Rô còn nghĩ, biết đâu nếu không có Rô thì bé sẽ thoải mái hơn, sẽ không phải buồn vì những lời nói của Rô, không phải chạnh lòng hay suy nghĩ nhiều vì cảm xúc của Rô nữa. Nhưng càng nghĩ Rô càng buồn, vì điều Rô thật sự mong muốn đâu phải là rời xa bé. Rô chỉ muốn mình biết cách yêu thương bé tốt hơn, để bé không còn phải chịu những cảm xúc như vậy nữa.',

      'Rô sợ mất bé lắm. Rô sợ một ngày nào đó bé đã buồn quá nhiều, đã chịu đựng quá nhiều mà Rô lại chẳng hề hay biết. Rô sợ bé cứ giữ mọi chuyện trong lòng, rồi đến lúc không còn muốn nói với Rô nữa thì hai đứa đã xa nhau mất rồi. Rô không muốn điều đó xảy ra đâu bé.',

      'Nên Rô muốn nói với bé rằng, nếu có điều gì ở Rô khiến bé buồn, bé cứ nói hết ra nha. Bé có thể trách Rô, có thể giận Rô, có thể nói những lời thật lòng dù những lời đó có làm Rô chạnh lòng hay đau một chút cũng được. Rô sẽ cố gắng ngồi nghe hết, không vội phản bác, không tìm cách biện minh hay đổ lỗi cho bé nữa. Rô muốn hiểu bé đang tổn thương ở đâu, Rô đã làm gì khiến bé buồn và Rô cần thay đổi những điều gì.',

      'Rô không dám hứa rằng sau này mình sẽ không bao giờ mắc lỗi, vì Rô biết bản thân còn nhiều điều chưa tốt lắm. Nhưng Rô thật sự muốn sửa, muốn học cách lắng nghe, muốn suy nghĩ kỹ hơn trước khi nói và muốn quan tâm đến cảm xúc của bé nhiều hơn. Rô không muốn chỉ xin lỗi rồi mọi chuyện lại lặp lại như cũ. Rô muốn bé nhìn thấy sự thay đổi đó từ những điều nhỏ nhất mà Rô làm mỗi ngày.',

      'Bé à, Rô thương bé nhiều lắm. Có lẽ nhiều lúc Rô chẳng biết thể hiện sao cho đúng, nói ra lại thành sai, muốn giải thích lại khiến bé buồn thêm. Nhưng tình cảm Rô dành cho bé là thật lòng. Rô còn muốn được cùng bé đi ăn, đi chơi, chụp thật nhiều hình, nghe bé kể những chuyện linh tinh và cùng nhau trải qua thật nhiều ngày tháng nữa.',

      'Rô thật sự không muốn mất bé đâu. Nhưng Rô cũng không muốn bé phải ở bên Rô mà cứ cảm thấy buồn hay không thoải mái. Rô muốn bé được vui vẻ, được là chính mình, được nói ra những điều bé nghĩ mà không phải sợ Rô buồn hay trách bé. Rô muốn khi ở bên Rô, bé cảm thấy được yêu thương chứ không phải lúc nào cũng phải cố gắng chịu đựng cảm xúc của Rô.',

      'Rô biết không thể chỉ bằng một lá thư mà khiến mọi chuyện tốt lên ngay được. Nhưng Rô mong bé hiểu rằng Rô đã thật sự suy nghĩ về những điều mình làm chưa tốt và Rô rất muốn thay đổi.',

      'Rô xin lỗi bé vì những lần đã khiến bé khóc, vì những lời nói không khéo, vì những lúc Rô chưa đủ tinh tế để hiểu cảm xúc của bé. Rô thương bé nhiều lắm, và Rô muốn học cách thương bé sao cho bé cũng cảm nhận được sự dịu dàng đó.',

      'Rô còn muốn cùng bé tạo thêm nhiều kỷ niệm đẹp nữa. Nên nếu bé vẫn còn muốn cùng Rô cố gắng, mình đừng giữ những chuyện buồn trong lòng một mình nữa nha. Có chuyện gì mình cùng nói, cùng nghe, cùng sửa và cùng thương nhau tốt hơn từng chút một.',

      'Rô thương bé nhiều lắm. Cảm ơn bé vì đã là một người thân thương trong cuộc sống của Rô. ♡'
    ]
  },
  {
    balloon: '✿',
    label: 'Lời thứ hai',
    title: 'Mình cùng hiểu nhau hơn nha bé ♡',
    body: [
      'Bé ơi, sau những chuyện vừa qua, Rô nhận ra hai đứa mình vẫn còn nhiều điều chưa hiểu hết về nhau. Có khi Rô nghĩ một đằng mà nói ra lại thành một nẻo, bé nghe xong thì buồn, còn Rô lại chẳng nhận ra ngay. Rô không muốn những hiểu lầm nhỏ cứ chất chồng rồi tạo khoảng cách giữa hai đứa nữa.',

      'Với Rô, bé không đơn giản chỉ là một người bạn thân đâu. Rô xem bé như người trong gia đình mình vậy á. Rô vui khi bé vui, thương khi bé buồn, và thật lòng muốn có mặt trong những chặng đường quan trọng của bé. Bởi vậy Rô càng muốn học cách lắng nghe để bé thấy thoải mái khi ở cạnh Rô.',

      'Sau này nếu bé có điều gì không vui, nhất là những chuyện liên quan đến Rô, bé cứ nói khi nào bé sẵn sàng nha. Rô sẽ cố nghe hết trước khi giải thích. Rô cũng sẽ tập nói rõ cảm xúc của mình hơn, chứ không nói những câu làm bé hiểu lầm rồi để bé phải tự đoán. Rô mong hai đứa có thể thành thật với nhau mà vẫn dịu dàng với nhau.',

      'Rô biết mỗi đứa có tính cách và sở thích riêng. Không cần phải giống nhau hết mới thân được mà, đúng hong bé? Điều Rô muốn là mình chịu tìm hiểu thế giới của nhau nhiều hơn. Bé thích gì thì kể Rô nghe, có điều gì Rô chưa biết thì Rô học thêm; rồi Rô cũng sẽ kể bé nghe những chuyện của Rô. Biết đâu mình lại tìm được thêm thật nhiều điều để làm chung.',

      'Rô muốn hai đứa đồng hành với nhau không chỉ lúc vui mà cả những hôm mệt, những lúc có chuyện khó nói. Nếu Rô giúp được thì Rô giúp, nếu không biết làm sao thì Rô vẫn có thể ngồi nghe bé kể. Và Rô cũng mong có thể chia sẻ với bé, để tình bạn này là nơi cả hai đều được quan tâm, chứ không phải chỉ một người cố gắng.',

      'Sau này mỗi đứa có thể sẽ bận hơn, có kế hoạch và cuộc sống riêng. Rô không mong lúc nào mình cũng phải ở cạnh nhau, chỉ mong dù lâu lâu mới gặp, hai đứa vẫn có thể tự nhiên hỏi thăm, kể mấy chuyện linh tinh, rủ nhau ăn một bữa rồi cười như mọi khi. Rô muốn tình bạn này đi cùng mình thật lâu.',

      'Mình cùng hiểu nhau hơn từng chút một nha bé. Không cần hoàn hảo, cũng không cần ép bản thân phải kể hết mọi chuyện ngay. Rô chỉ mong mình đủ tin tưởng để nói với nhau điều thật lòng, đủ kiên nhẫn để nghe nhau và đủ thương quý để cùng sửa khi lỡ làm nhau buồn. ♡'
    ]
  },
  {
    balloon: '☁',
    label: 'Lời thứ ba',
    title: 'Có bé là điều Rô rất trân trọng ♡',
    body: [
      'Bé biết hong, Rô thật sự rất vui vì đã gặp được bé. Những ngày có bé ở bên, dù chỉ đi ăn, đi dạo, chụp vài tấm hình hay ngồi nói mấy chuyện xàm xàm, Rô cũng thấy vui lắm. Nhiều khi chẳng cần làm gì đặc biệt, chỉ cần hai đứa có một buổi đi chơi thoải mái là đủ thành kỷ niệm đẹp rồi.',

      'Cũng vì vậy mà Rô luôn muốn dắt bé đi nhiều nơi hơn, ăn những món mới, thử những điều mà hai đứa chưa từng làm. Rô thích được nghe bé kể cảm nhận của mình, thích nhìn bé hào hứng khi khám phá điều gì đó. Rô muốn sau này nhìn lại, hai đứa có cả một đống hình và một đống chuyện để nhắc rồi cười với nhau.',

      'Rô còn nhớ bữa bé kể rằng hồi nhỏ bé không có nhiều cơ hội được tiếp xúc hay trải nghiệm nhiều thứ. Lúc nghe vậy, Rô nghĩ: những điều trước đây bé chưa có dịp thử, giờ nếu bé thích thì để Rô đi cùng bé nha. Mình có thể bắt đầu từ những điều nho nhỏ thôi, một món ăn lạ, một chỗ chưa từng tới hay một hoạt động mà bé tò mò từ lâu.',

      'Rô biết Rô không thể quay lại để bù đắp hết những năm tháng ngày trước của bé, và Rô cũng không cần làm điều gì thật lớn lao. Rô chỉ mong từ bây giờ bé có thêm nhiều niềm vui, thêm nhiều cơ hội trải nghiệm điều bé thích. Nếu bé muốn, Rô sẽ là người cùng bé lên kế hoạch, đi thử và lưu giữ những kỷ niệm đó.',

      'Với Rô, điều đáng quý không phải là chỗ mình đến sang cỡ nào, mà là được cùng bé có mặt ở đó. Cảm ơn bé vì đã xuất hiện trong cuộc sống của Rô, vì những ngày vui và cả những điều hai đứa đã học được từ nhau. Rô xem bé như gia đình, nên Rô mong mình vẫn sẽ cùng nhau đi thêm nhiều nơi và có thật nhiều ngày bình yên như vậy. ♡'
    ]
  },
  {
    balloon: '♫',
    label: 'Một ngày bình thường thôi ♡',
    title: 'Thứ Bảy này bé đi cùng Rô nha?',
    body: [
      'Bé ơi, thứ Bảy này, ngày 24/10, là sinh nhật Rô rồi nè. Mà thật ra Rô không muốn tổ chức gì hoành tráng hay đi chỗ nào sang trọng hết á. Rô chỉ muốn có một ngày bình thường, nhẹ nhàng và thoải mái, được dành chút thời gian với người mà Rô xem như gia đình.',

      'Rô nghĩ mình có thể tìm một nơi nhỏ nhỏ, ấm cúng, ngồi ăn gì đó ngon ngon, mở tivi xem cùng nhau rồi kể đủ thứ chuyện trên đời. Chuyện vui cũng được, chuyện linh tinh cũng được, hoặc có khi hai đứa chỉ ngồi đó thư giãn thôi cũng vui rồi. Rô thích những khoảnh khắc tự nhiên như vậy hơn là phải chuẩn bị một buổi sinh nhật thật cầu kỳ.',

      'Sau những chuyện vừa rồi, Rô cũng muốn hai đứa có một dịp gặp nhau thật thoải mái, không phải để ép bé nói điều gì đâu nha. Chỉ là nếu bé muốn kể chuyện, Rô rất sẵn lòng nghe; còn nếu bé chỉ muốn ăn ngon và xem tivi thì mình cứ tận hưởng một buổi thật vui thôi.',

      'Bé đừng bận tâm chuyện quà cáp nha. Với Rô, việc bé dành thời gian đến ngồi chơi, cùng ăn một bữa, kể chuyện và cười đùa đã là món quà sinh nhật rất lớn rồi. Rô thật lòng trân trọng điều đó hơn bất kỳ món quà đắt tiền nào.',

      'Vậy thứ Bảy này, nếu bé rảnh và thấy thoải mái, bé đi cùng Rô nha? Mình không cần một ngày thật đặc biệt đâu, chỉ cần một ngày bình thường mà sau này nhớ lại cả hai đều thấy vui. Cảm ơn bé vì đã là một phần rất đáng quý trong cuộc sống của Rô. Rô thương bé nhiều lắm. ♡'
    ],
    place: 'Chốn Thành Phố'
  }
];
const tracks = [
  { detail: 'piano dịu nhẹ', path: '/music/01-xin-loi.mp4' },
  {  detail: 'êm ấm và bình yên', path: '/music/02-hieu-nhau.mp4' },
  { detail: 'trong trẻo, vui tươi', path: '/music/03-ky-niem.mp4' },
  {detail: 'ấm áp như ở nhà', path: '/music/04-loi-hen.mp4' }
];
const photoPages = [
  [{ src: '/images/anh-01.jpg' }, { src: '/images/anh-02.jpg'}, { src: '/images/anh-03.jpg' }],
  [{ src: '/images/anh-04.jpg'}, { src: '/images/anh-11.jpg'  }, { src: '/images/anh-06.jpg' }],
  [{ src: '/images/anh-07.jpg' }, { src: '/images/anh-12.jpg' }, { src: '/images/anh-09.jpg' }],
  [{ src: '/images/anh-10.jpg' }, { src: '/images/anh-05.jpg' }, { src: '/images/anh-08.jpg' }, { src: '/images/anh-13.jpg'}]
];
const petals = Array.from({ length: 32 }, (_, i) => ({
  angle: `${i * 137.51}deg`,
  distance: `${110 + (i % 5) * 41}px`,
  delay: `${(i % 8) * 0.038}s`,
  flower: ['✿','❀','✾','♡'][i % 4]
}));

export default function LetterGarden({ onClose, onLetterOpen, onLetterClose, musicOn, onToggleMusic }) {
  const [selected, setSelected] = useState(null);
  const [opened, setOpened] = useState([]);
  const [bloomKey, setBloomKey] = useState(0);
  const [readProgress, setReadProgress] = useState(0);
  const scrollBox = useRef(null);
  const currentIndex = selected === null ? 0 : selected;
  const song = tracks[currentIndex];
  const item = selected === null ? null : letters[selected];

  useEffect(() => {
    const handler = event => { if (event.key === 'Escape') { onLetterClose?.(); setSelected(null); } };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onLetterClose]);
  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const showLetter = index => {
    setSelected(index);
    setBloomKey(key => key + 1);
    setReadProgress(0);
    onLetterOpen?.(index);
    setOpened(previous => previous.includes(index) ? previous : [...previous, index]);
  };
  const handleScroll = () => {
    const el = scrollBox.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setReadProgress(max > 0 ? Math.min(100, Math.round(100 * el.scrollTop / max)) : 100);
  };
  const close = () => { onLetterClose?.(); setSelected(null); };

  return <section className="letter-garden">
    <div className="lg-stars" aria-hidden="true">✧ &nbsp; ✦ &nbsp; ⋆ &nbsp; ✧</div>
    <button className="lg-back" onClick={() => { onLetterClose?.(); onClose(); }} aria-label="Trở về">← <span>trở về</span></button>
    <div className="lg-intro"><span className="lg-eyebrow">A LITTLE GARDEN OF LETTERS · FOR BÉ</span>
      <span className="lg-intro-flower" aria-hidden="true">✿</span>
      <h1>Bốn lá thư<br/><em>gửi bé thương</em></h1>
      <p>Bên trong có chút bí mật dành riêng cho bé… Mở ra nha ♡</p>
      <span className="lg-mini-line">✧ ───── ✿ ───── ✧</span>
    </div>
    <div className="lg-envelope-grid">
      {letters.map((letter, index) => <button key={index} type="button" className={`lg-envelope lg-envelope--${index} ${opened.includes(index) ? 'lg-has-opened' : ''}`} onClick={() => showLetter(index)} style={{'--order':index}}>
        <span className="lg-envelope-number">0{index + 1} / 04</span>
        <span className="lg-envelope-art"><span className="lg-envelope-flap"/><span className="lg-envelope-paper"/><span className="lg-envelope-heart">{letter.balloon}</span></span>
        <span className="lg-envelope-title">Đó là bí mật ♡</span>
        <span className="lg-envelope-desc">Bé mở ra rồi sẽ biết nè ✿</span>
        <span className="lg-envelope-cta">{opened.includes(index) ? 'đọc lại thư ↗' : 'mở lá thư ↗'}</span>
      </button>)}
    </div>
    <div className="lg-bottom-note"><span>✿</span>Chỉ cần mình có nhau. <span>✿</span></div>

    {item && <div className="lg-overlay" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) close(); }}>
      <div key={bloomKey} className="lg-petal-burst" aria-hidden="true">{petals.map((petal,i) => <span key={i} style={{'--angle':petal.angle,'--distance':petal.distance,'--delay':petal.delay}}>{petal.flower}</span>)}</div>
      <article className="lg-letter" role="dialog" aria-modal="true" aria-label={item.title}>
        <div className="lg-letter-top">
          <span className="lg-letter-count">LETTER 0{selected + 1} — TO BÉ ♡</span>
          <div className="lg-letter-actions">
            <button className={`lg-audio ${musicOn ? 'lg-audio-on' : ''}`} onClick={onToggleMusic} aria-label={musicOn ? 'Tắt nhạc' : 'Bật nhạc'} title={song.name}>{musicOn ? '♫' : '♪'} <span>{song.name}</span></button>
            <button className="lg-close" onClick={close} aria-label="Đóng lá thư">×</button>
          </div>
        </div>
        <div className="lg-letter-scroll" ref={scrollBox} onScroll={handleScroll} key={selected}>
          <div className="lg-letter-title-block"><span className="lg-ornament">❀</span><div className="lg-tag">{item.label}</div><h2>{item.title}</h2><p>— những điều Rô muốn kể cùng bé —</p></div>
          
          <div className="lg-letter-body">{item.body.map((p,i) => <p key={i}>{p}</p>)}</div>
          <div className="lg-photo-strip">{photoPages[selected].map((photo, index) => <figure key={photo.src}><img src={photo.src} alt={photo.caption}/><figcaption>{photo.caption}</figcaption></figure>)}</div>
          {item.place && <div className="lg-invite"><span>✿ một lời hẹn nhỏ ✿</span><strong>24 · 10</strong><p>Chỉ cần bên bé là Rô vui rồi.</p></div>}
          <div className="lg-signature">Thương bé nhiều, <em>Rô thúi của Bé ♡</em></div>
          <button className="lg-next" onClick={() => selected === 3 ? close() : showLetter(selected + 1)}>{selected === 3 ? 'Khép lá thư này ♡' : 'Đọc lời tiếp theo →'}</button>
        </div>
        <div className="lg-progress"><span style={{width:`${readProgress}%`}}/></div>
        <div className="lg-music-caption">{song.detail} · {musicOn ? 'nhạc từ video TikTok' : 'nhạc đang tắt'}</div>
      </article>
    </div>}
  </section>;
}
