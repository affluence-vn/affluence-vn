export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: string;
  gradient: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "do-tuoi-vang-hoc-tieng-anh",
    title: "Mấy tuổi cho con học tiếng Anh là vừa? Chuyện 'độ tuổi vàng'",
    excerpt:
      "Người bảo 3 tuổi là muộn, người bảo cứ từ từ vào lớp 1 rồi tính. Rốt cuộc ai đúng? Bài này kể cho bố mẹ nghe khoa học nói gì — và vì sao sớm không có nghĩa là ép.",
    category: "Kiến thức",
    date: "2026-07-20",
    readingTime: "6 phút đọc",
    gradient: "var(--grad-brand)",
    sections: [
      {
        paragraphs: [
          "Đi họp phụ huynh hay ngồi cà phê với hội bạn có con nhỏ, kiểu gì cũng có người hỏi: \"Bé nhà chị học tiếng Anh chưa?\". Người thì giục học sớm đi kẻo lỡ, người lại gạt đi, bảo nó nói tiếng Việt còn chưa sõi. Nghe ai cũng có lý, thành ra càng rối.",
          "Vậy nên hôm nay mình ngồi gỡ từng nút một, xem khoa học thực ra nói gì về chuyện này.",
        ],
      },
      {
        heading: "Não trẻ con 'bắt sóng' ngôn ngữ giỏi đến khó tin",
        paragraphs: [
          "Giới nghiên cứu ngôn ngữ gần như thống nhất với nhau một điều: từ lúc mới sinh đến khoảng 7 tuổi, não trẻ nhạy với âm thanh ngôn ngữ hơn bất kỳ giai đoạn nào về sau. Con nghe được những khác biệt âm rất nhỏ mà tai người lớn đã 'đóng lại' từ lâu, và bắt chước gần như không tốn sức. Đó là lý do mấy bé tiếp xúc tiếng Anh sớm thường phát âm nghe 'Tây' hơn hẳn bố mẹ.",
          "Qua khoảng 10–12 tuổi, cánh cửa ấy khép dần. Không phải là hết học được — người lớn học ngữ pháp thậm chí còn nhanh hơn trẻ con vì đầu óc logic hơn. Nhưng riêng khoản phát âm cho thật tự nhiên thì càng lớn càng phải đổ mồ hôi nhiều hơn cho cùng một kết quả.",
        ],
      },
      {
        heading: "Nhưng khoan — sớm không có nghĩa là ép",
        paragraphs: [
          "Đây là chỗ nhiều nhà hiểu nhầm nhất. Nghe 'độ tuổi vàng' xong, không ít bố mẹ mua ngay bộ flashcard dày cộp về bắt con ngồi trả bài mỗi tối. Con khóc, mẹ cáu, và tiếng Anh từ đó thành 'món' đáng sợ nhất trong ngày.",
          "Với bé 3–5 tuổi, học đúng nghĩa là chơi: nghe bài hát, xem một tập hoạt hình ngắn, chơi ú òa bằng tiếng Anh với bố mẹ. Con không cần biết mình đang 'học'. Còn nỗi sợ thì ngược lại — một khi đã hình thành, nó đeo bám con dai dẳng lắm, có khi đến tận cấp ba.",
        ],
      },
      {
        heading: "Theo từng độ tuổi thì bắt đầu thế nào?",
        list: [
          "0–3 tuổi: nghe là chính — nhạc thiếu nhi tiếng Anh, bố mẹ đọc truyện song ngữ trước giờ ngủ. Vậy là đủ.",
          "3–6 tuổi: thêm hoạt hình tiếng Anh (có giờ giấc hẳn hoi), và nếu đi học thì chọn lớp học-mà-chơi, nhiều vận động.",
          "6–9 tuổi: bắt đầu học bài bản được rồi, nhưng ưu tiên nghe – nói trước, đọc – viết theo sau.",
          "9–12 tuổi: xây ngữ pháp, từ vựng học thuật, và có thể nhắm tới các chứng chỉ thiếu nhi như Cambridge Starters, Movers, Flyers.",
        ],
      },
      {
        heading: "Chốt lại",
        paragraphs: [
          "Không có con số thần kỳ nào đúng cho mọi đứa trẻ đâu. Nguyên tắc chỉ có một: bắt đầu sớm thì thuận lợi, nhưng phải nhẹ nhàng, vui vẻ và đều đặn. Một đứa trẻ thích tiếng Anh sẽ tự chạy xa hơn mọi lộ trình mà người lớn vẽ sẵn — việc của bố mẹ chỉ là đừng làm con hết thích.",
        ],
      },
    ],
  },
  {
    slug: "hoc-tieng-anh-qua-tro-choi",
    title: "7 trò chơi tiếng Anh tại nhà — không cần iPad, không cần giỏi tiếng Anh",
    excerpt:
      "Chỉ cần giấy bút và 15 phút mỗi tối, bố mẹ có thể biến tiếng Anh thành khoảng thời gian con mong nhất trong ngày. Đã thử nghiệm trên vô số gia đình, tỷ lệ cười lớn: 100%.",
    category: "Mẹo cho phụ huynh",
    date: "2026-07-14",
    readingTime: "5 phút đọc",
    gradient: "var(--grad-mint)",
    sections: [
      {
        paragraphs: [
          "Trẻ con học nhanh nhất khi nào? Khi chúng không biết mình đang học. Cứ nhìn cách con thuộc làu tên mấy chục con Pokémon mà chẳng ai bắt ép thì rõ.",
          "Dưới đây là 7 trò cực đơn giản mà nhà nào cũng chơi được — kể cả khi tiếng Anh của bố mẹ đã 'trả lại thầy cô' từ lâu. Không app, không màn hình, không tốn một đồng.",
        ],
      },
      {
        heading: "1. Săn kho báu từ vựng",
        paragraphs: [
          "Viết dăm bảy từ lên giấy nhớ — apple, chair, door — rồi dán lên đúng đồ vật trong nhà. Vài hôm sau, lén tráo chỗ vài tờ: dán 'door' lên tủ lạnh chẳng hạn. Nhiệm vụ của con là đi tuần khắp nhà 'bắt lỗi' và sửa lại. Con chạy nhảy, cười khúc khích, và chẳng cần ngồi vào bàn phút nào mà từ cứ thế ngấm.",
        ],
      },
      {
        heading: "2. Simon Says phiên bản gia đình",
        paragraphs: [
          "Trò kinh điển của mọi lớp học tiếng Anh trẻ em, và lý do nó kinh điển là vì nó vui thật. Luật đơn giản: hô \"Simon says touch your nose!\" thì con làm theo, còn hô thiếu \"Simon says\" mà con vẫn sờ mũi là thua. Chơi chục lần là con thuộc hết bộ phận cơ thể với động từ chỉ hành động, không cần giở sách trang nào.",
        ],
      },
      {
        heading: "3. Chiếc túi bí mật",
        paragraphs: [
          "Bỏ một món đồ vào túi vải, cho con thò tay sờ rồi đoán: \"Is it big? Is it soft?... It's a ball!\". Nghe thì đơn giản nhưng đây chính là cách con luyện câu hỏi Yes/No và tính từ mô tả — mấy mẫu câu nền tảng nhất — trong lúc hồi hộp y như mở quà.",
        ],
      },
      {
        heading: "4. Vẽ theo lời kể",
        paragraphs: [
          "Bố mẹ tả bằng tiếng Anh thật chậm: \"Draw a big sun. Draw two birds.\" — con cầm bút vẽ theo. Xong tranh, đổi vai để con tả cho bố mẹ vẽ. Phần hay nhất luôn là lúc so tranh: bức của bố kiểu gì cũng xấu nhất nhà, và con sẽ nhớ buổi tối hôm đó rất lâu.",
        ],
      },
      {
        heading: "5. Ai vỗ nhanh hơn",
        paragraphs: [
          "Trải chục thẻ từ vựng ra bàn. Hô to một từ — cả nhà thi nhau đập tay vào thẻ đúng. Đứa trẻ nào cũng mê trò này một cách kỳ lạ, và sau vài tuần bố mẹ sẽ thấy tốc độ nhận mặt chữ của con tăng rõ rệt. Mẹo nhỏ: thỉnh thoảng nhớ... thua cho khéo.",
        ],
      },
      {
        heading: "6. Mở tiệm tạp hóa",
        paragraphs: [
          "Bày mấy món đồ chơi ra làm quầy hàng, con làm chủ tiệm, bố mẹ làm khách khó tính: \"How much is this?\" — \"Two dollars, please!\". Mẫu câu mua bán là thứ con sẽ dùng cả đời, và học nó qua trò đóng vai thì nhớ gấp mười lần chép vở.",
        ],
      },
      {
        heading: "7. Kể chuyện tiếp sức",
        paragraphs: [
          "Mỗi người góp một câu để nối thành chuyện: \"One day, a cat...\" — \"The cat saw a fish...\". Chuyện càng lúc càng phi lý thì càng vui. Con mới học mà chêm nửa Anh nửa Việt cũng chẳng sao — mục tiêu là con dám mở miệng, chứ không phải nói cho hoàn hảo.",
        ],
      },
      {
        heading: "Vài mẹo để trò chơi sống được lâu",
        list: [
          "Chơi ngắn thôi: 10–15 phút mỗi tối ăn đứt 2 tiếng dồn cục cuối tuần.",
          "Cố định một khung giờ — sau bữa tối chẳng hạn — để nó thành nếp như đánh răng.",
          "Con nói sai? Kệ. Dám nói đã là thắng rồi, sửa nhiều con cụt hứng.",
          "Thời gian đầu, hãy để con thắng thường xuyên. Cảm giác thắng mới là thứ kéo con quay lại.",
        ],
      },
    ],
  },
  {
    slug: "chon-trung-tam-tieng-anh-cho-con",
    title: "Chọn trung tâm tiếng Anh cho con: 8 điều nên soi kỹ trước khi xuống tiền",
    excerpt:
      "Học phí đắt chưa chắc tốt, gần nhà chưa chắc hợp, còn quảng cáo thì trung tâm nào cũng hay như nhau. Đây là 8 câu hỏi giúp bố mẹ nhìn xuyên qua lớp vỏ marketing.",
    category: "Cẩm nang chọn trường",
    date: "2026-07-07",
    readingTime: "7 phút đọc",
    gradient: "var(--grad-sunrise)",
    sections: [
      {
        paragraphs: [
          "Đứng trước cổng trường đón con, thể nào bố mẹ cũng được dúi vào tay dăm ba tờ rơi trung tâm tiếng Anh. Tờ nào cũng '100% giáo viên bản ngữ', 'phương pháp độc quyền từ Mỹ', 'cam kết đầu ra'. Đọc xong chỉ thấy... giống hệt nhau.",
          "Làm việc với hàng chục trường và trung tâm, chúng tôi nghiệm ra: chỗ tốt và chỗ thường khác nhau không nằm ở tờ rơi, mà ở những câu hỏi mà ít phụ huynh hỏi. Đây là 8 câu đó.",
        ],
      },
      {
        heading: "1. Giáo viên có nghiệp vụ, hay chỉ có... quốc tịch?",
        paragraphs: [
          "\"Giáo viên bản ngữ\" nghe sang, nhưng nói tiếng Anh giỏi và dạy tiếng Anh giỏi là hai chuyện khác hẳn nhau — giống như ai cũng nói sõi tiếng Việt nhưng mấy ai dạy nổi lớp 1. Cứ hỏi thẳng: thầy cô có chứng chỉ giảng dạy (TESOL, CELTA) không, và đã dạy trẻ em bao lâu? Một cô giáo Việt giỏi nghề, hiểu tâm lý trẻ, ăn đứt một anh Tây chưa từng đứng lớp.",
        ],
      },
      {
        heading: "2. Lớp bao nhiêu bé?",
        paragraphs: [
          "Con số lý tưởng là 8–12: đủ đông để chơi trò chơi nhóm, đủ vắng để bé nào cũng được gọi nói vài lượt mỗi buổi. Còn lớp 20 bé trở lên thì thầy có ba đầu sáu tay, thời gian mở miệng của mỗi con cũng chỉ được vài chục giây.",
        ],
      },
      {
        heading: "3. Lộ trình có rõ ràng không, hay chỉ hứa 'bé sẽ tiến bộ'?",
        paragraphs: [
          "Trung tâm tử tế trả lời được ngay: con đang ở trình độ nào, học giáo trình gì, sau một năm đạt được gì, đo bằng cách nào. Còn nếu câu trả lời chỉ là 'phụ huynh yên tâm, bé nào học cũng tiến bộ nhanh lắm' — ừ thì ai chả nói được thế.",
        ],
      },
      {
        heading: "4. Học thử rồi hẵng đóng tiền",
        paragraphs: [
          "Buổi học thử đáng giá hơn mọi lời tư vấn. Nhưng đừng chỉ nhìn xem con có vui không — hãy để ý những thứ nhỏ hơn: cô có gọi tên từng bé không? Bé nhút nhát ngồi góc lớp có được kéo vào cuộc không? Và lớp vui đấy, nhưng có học được gì thật không, hay 60 phút toàn trò chơi?",
        ],
      },
      {
        heading: "5. Học xong, bố mẹ có được biết gì không?",
        paragraphs: [
          "Chỗ chuyên nghiệp sẽ có báo cáo định kỳ: tháng này con học chủ đề gì, khá lên ở đâu, cần kèm thêm gì. Chỗ làm ăn kiểu 'gửi con rồi chờ hết khóa' thì đến lúc nhận ra con chẳng tiến bộ gì, tiền học đã đóng đủ 12 tháng rồi.",
        ],
      },
      {
        heading: "6. Học phí có minh bạch không?",
        paragraphs: [
          "Mấy câu nên hỏi cho rõ ngay từ đầu, và yêu cầu trả lời trên giấy: học phí đã gồm giáo trình chưa? Con ốm nghỉ có được học bù không? Học vài buổi thấy không hợp, hoàn phí thế nào? Trung tâm đàng hoàng không ngại những câu này — chỗ nào ậm ờ mới đáng ngại.",
        ],
      },
      {
        heading: "7. Đường đi có xa quá không?",
        paragraphs: [
          "Nghe tầm thường mà lại là lý do bỏ học số một. Tuần ba buổi, mỗi buổi đưa đón 45 phút giữa giờ tan tầm — được vài tháng là cả nhà oải, con nghỉ lúc nào không hay. Một trung tâm 'tốt vừa đủ' cách nhà 10 phút, về lâu dài, thắng một trung tâm 'xuất sắc' ở bên kia thành phố. Vì với trẻ con, đều đặn quan trọng hơn mọi thứ.",
        ],
      },
      {
        heading: "8. Và câu hỏi quan trọng nhất — dành cho con",
        paragraphs: [
          "Học thử xong, trên đường về, hỏi con một câu thôi: \"Con có muốn quay lại lớp đó nữa không?\". Trẻ con không biết đánh giá giáo trình hay bằng cấp, nhưng cảm giác của con về cô giáo, về các bạn, là chỉ báo thật nhất về việc con có gắn bó nổi một năm hay không. Con lắc đầu thì có rẻ mấy cũng nên cân nhắc lại.",
        ],
      },
      {
        heading: "Checklist bỏ túi khi đi tham quan",
        list: [
          "Thầy cô có TESOL/CELTA và kinh nghiệm dạy trẻ em?",
          "Lớp bao nhiêu bé?",
          "Lộ trình + cách đánh giá tiến bộ, có văn bản rõ ràng?",
          "Có buổi học thử miễn phí không?",
          "Báo cáo học tập gửi phụ huynh bao lâu một lần?",
          "Học phí trọn gói hay còn phụ phí? Chính sách học bù, hoàn phí?",
          "Đưa đón tuần 2–3 buổi có trụ nổi cả năm không?",
          "Và: con có muốn quay lại không?",
        ],
      },
    ],
  },
  {
    slug: "tre-xem-youtube-tieng-anh",
    title: "Con 'nói tiếng Anh như gió' nhờ YouTube — mừng hay lo?",
    excerpt:
      "Bé 4 tuổi hát vanh vách bài hát tiếng Anh, đếm số, gọi màu — toàn nhờ YouTube. Nhưng hỏi 'What's your name?' thì im re. Chuyện quen không? Bài này giải thích vì sao.",
    category: "Kiến thức",
    date: "2026-06-28",
    readingTime: "6 phút đọc",
    gradient: "var(--grad-sky)",
    sections: [
      {
        paragraphs: [
          "Cảnh này chắc nhiều nhà thấy quen: bé con 4–5 tuổi ngồi xem YouTube, thỉnh thoảng lại hát theo một đoạn tiếng Anh tròn vành rõ chữ, đếm one two three lên đến hai mươi. Ông bà mừng ra mặt, khoe khắp họ hàng là cháu có năng khiếu.",
          "Rồi một hôm có khách Tây, hoặc đi học thử, cô hỏi \"What's your name?\" — con im re, nép sau lưng mẹ. Ơ hay, thế bao nhiêu tiếng Anh hôm trước đâu rồi?",
        ],
      },
      {
        heading: "Xem nhiều thì giỏi 'nhại', chưa chắc giỏi 'nói'",
        paragraphs: [
          "Công bằng mà nói, YouTube cho con một thứ rất quý: lượng tiếng Anh khổng lồ đổ vào tai mỗi ngày. Nhờ nó con quen ngữ điệu, tích được cả kho từ, phát âm chuẩn hơn khối người lớn. Cái đó là thật, không phải phủ nhận.",
          "Nhưng ngôn ngữ có hai chiều: nghe vào và nói ra. Mà màn hình thì có bao giờ hỏi lại con đâu, cũng chẳng chờ con trả lời, con nói sai cũng chẳng ai sửa. Thế nên mới sinh ra kiểu 'tiếng Anh YouTube': thuộc cả chục bài hát nhưng không tự ghép nổi một câu để hỏi xin thêm miếng bánh. Con đang bắt chước giỏi, chứ chưa dùng được ngôn ngữ — hai chuyện nghe giống nhau mà cách nhau xa lắm.",
        ],
      },
      {
        heading: "Vài thứ ít người nói với bố mẹ",
        list: [
          "Ngồi màn hình nhiều giờ mỗi ngày là giấc ngủ, mắt và khả năng tập trung của con lãnh đủ.",
          "Thuật toán gợi ý không phân biệt video nào bổ ích — cứ giữ được mắt con là nó chiếu, và chỉ vài cú lướt là trôi sang nội dung nhảm.",
          "Có những bé xem quá nhiều, quá sớm còn chậm nói cả tiếng Việt — chuyện các chuyên gia nhi khoa đã cảnh báo nhiều năm nay.",
        ],
      },
      {
        heading: "Đừng cấm — hãy xem cùng",
        paragraphs: [
          "Tin vui là không cần tịch thu iPad làm gì (cấm rồi cũng dấm dúi xem thôi, ta biết cả mà). Thứ cần đổi không phải là xem hay không xem, mà là xem như thế nào:",
        ],
        list: [
          "Khoán giờ rõ ràng: dưới 6 tuổi thì 30–60 phút mỗi ngày là kịch trần.",
          "Chọn kênh nhịp chậm, lời thoại rõ, có nhân vật hay dừng lại hỏi khán giả — loại đó đáng giá gấp mười loại chiếu liên tục không nghỉ.",
          "Thi thoảng ngồi xem cùng con, bấm dừng mà hỏi: \"What color is it?\", \"Where is the cat?\". Chính cái lượt hỏi–đáp đó mới là lúc tiếng Anh 'sống dậy'.",
          "Xem xong thì chơi lại: hát lại bài trong video, đóng vai nhân vật, vẽ lại cảnh con thích. Nội dung được dùng lại một lần là nhớ gấp đôi.",
          "Và cân lại lịch: vẫn phải còn chỗ cho truyện trước giờ ngủ, cho chạy nhảy, cho lớp học có bạn bè thật.",
        ],
      },
      {
        heading: "Chốt lại",
        paragraphs: [
          "YouTube là cái loa nghe tiếng Anh tuyệt vời, nhưng là ông thầy tồi nếu phải đứng lớp một mình. Video cho con nghe, còn bố mẹ và lớp học cho con được nói, được hỏi, được sửa. Đủ cả ba mảnh đó, giờ ngồi màn hình của con mới thật sự đổi được thành vốn liếng ngôn ngữ — chứ không chỉ là mấy bài hát thuộc lòng để biểu diễn cho ông bà xem.",
        ],
      },
    ],
  },
  {
    slug: "lo-trinh-hoc-tieng-anh-cho-tre-4-12-tuoi",
    title: "Lộ trình tiếng Anh cho con từ 4 đến 12 tuổi — nhìn một phát hết cả chặng đường",
    excerpt:
      "Sai lầm phổ biến nhất không phải chọn nhầm trung tâm, mà là học không có lộ trình: thấy con nhà người ta học gì thì học nấy. Bài này vẽ lại cả chặng đường để bố mẹ đỡ loay hoay.",
    category: "Lộ trình học",
    date: "2026-06-18",
    readingTime: "8 phút đọc",
    gradient: "var(--grad-peach)",
    sections: [
      {
        paragraphs: [
          "Có một kiểu học tiếng Anh rất phổ biến mà ít ai nhận ra: học theo phong trào. Thấy con đồng nghiệp luyện phonics thì con mình cũng phonics, nghe nói bên kia thi Starters thì mình cũng đăng ký thi. Học dăm tháng, bận việc, nghỉ. Năm sau sốt ruột, lại bắt đầu từ đầu.",
          "Từng mảnh riêng lẻ đều không sai — chỉ thiếu mỗi sợi dây xâu chúng lại. Bài này là sợi dây đó: một lộ trình tham khảo từ 4 đến 12 tuổi, để bố mẹ biết con đang đứng đâu và bước tiếp theo là gì.",
        ],
      },
      {
        heading: "4–6 tuổi: Chỉ cần con thấy vui",
        paragraphs: [
          "Giai đoạn này mục tiêu chỉ có một, nghe hơi ngược đời: làm sao để con thấy tiếng Anh là thứ hay ho. Chưa cần viết, chưa cần điểm số, chưa cần gì cả ngoài những buổi 'học' đầy tiếng cười qua bài hát, trò chơi và truyện tranh.",
        ],
        list: [
          "Từ vựng quanh những gì con sờ được, thấy được: gia đình, con vật, màu sắc, đồ ăn.",
          "Nghe và nhại mẫu câu ngắn: 'I like...', 'This is...', 'Can I have...?'",
          "Chữ nghĩa? Tô chữ, nhận mặt chữ cái là quá đủ rồi.",
          "Dấu hiệu con đang đi đúng đường: tự dưng nghe con đếm số hay hát tiếng Anh trong lúc chơi một mình.",
        ],
      },
      {
        heading: "6–8 tuổi: Học đánh vần kiểu Tây (phonics) và viết câu đầu tiên",
        paragraphs: [
          "Con vào lớp 1, đọc được tiếng Việt rồi — giờ là lúc học phonics bài bản. Phonics giống như trao cho con chiếc chìa khóa vạn năng: nắm được nó, con tự đọc được cả những từ chưa gặp bao giờ, không phải chờ ai đọc mẫu.",
        ],
        list: [
          "Mục tiêu số một: tự đánh vần và đọc được từ lạ 1–2 âm tiết.",
          "Mỗi ngày 5–10 phút truyện tranh mức dễ (graded readers) — ít mà đều, đừng nhiều mà bữa đực bữa cái.",
          "Tập viết câu đơn về chính mình: 'I have a dog. My dog is black.'",
          "Cột mốc để nhắm (không bắt buộc): chứng chỉ Cambridge Pre A1 Starters.",
        ],
      },
      {
        heading: "8–10 tuổi: Nói thành đoạn, ngữ pháp vào nếp",
        paragraphs: [
          "Đến đây con đã nghe – nói cơ bản ổn rồi, mình mở rộng dần: các thì thông dụng, biết đặt câu hỏi, và tập trình bày trọn vẹn một ý chứ không chỉ trả lời nhát gừng từng câu.",
        ],
        list: [
          "Nói được đoạn 3–5 câu về trường lớp, sở thích, kỳ nghỉ hè.",
          "Ngữ pháp học qua tình huống — hiện tại đơn, hiện tại tiếp diễn, quá khứ đơn — chứ không phải qua bảng chia động từ khô khốc.",
          "Đọc hiểu đoạn văn ngắn; viết được đoạn 30–50 từ.",
          "Cột mốc tham khảo: Cambridge A1 Movers.",
        ],
      },
      {
        heading: "10–12 tuổi: Tiếng Anh thành công cụ, không còn là môn học",
        paragraphs: [
          "Chặng cuối trước cấp 2, và cũng là lúc mọi thứ 'ra tấm ra món': con dùng tiếng Anh để đọc thứ con thích, viết điều con nghĩ, và đứng nói trước lớp mà không run.",
        ],
        list: [
          "Thuyết trình 2–3 phút về đề tài con tự chọn — khủng long hay vũ trụ, miễn là con mê.",
          "Viết đoạn 60–80 từ có mở – thân – kết đàng hoàng.",
          "Nghe hiểu video, câu chuyện dài với tốc độ nói tự nhiên.",
          "Cột mốc: Cambridge A2 Flyers, và đầu cấp 2 có thể với tới KET (A2 Key).",
        ],
      },
      {
        heading: "Ba điều đúng cho mọi giai đoạn",
        list: [
          "Đều đặn thắng cường độ: 20–30 phút mỗi ngày ăn đứt 3 tiếng nhồi cuối tuần — luôn luôn là vậy.",
          "Nghe – nói trước, đọc – viết sau. Trẻ con học tiếng Việt cũng theo đúng trình tự đó thôi.",
          "Chứng chỉ là cột mốc bên đường, không phải đích đến. Đừng để một kỳ thi làm con hết yêu cả một ngôn ngữ.",
        ],
      },
      {
        heading: "Lời cuối",
        paragraphs: [
          "Mỗi đứa trẻ đi một nhịp riêng — lộ trình trên là bản đồ tham khảo, không phải thước để đo con mình với 'con nhà người ta'. Con đi chậm hơn bản đồ vài tháng chẳng sao cả; con bỏ cuộc giữa đường mới là điều đáng tiếc. Việc của người lớn là giữ cho hành trình ấy liền mạch và vui vẻ — phần còn lại, cứ để con tự đi.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${Number(d)}/${Number(m)}/${y}`;
}
