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
    title: "Độ tuổi vàng học tiếng Anh của trẻ: khoa học nói gì?",
    excerpt:
      "Trẻ bắt đầu học tiếng Anh từ mấy tuổi là tốt nhất? Cùng tìm hiểu 'giai đoạn vàng' tiếp thu ngôn ngữ và cách tận dụng nó mà không tạo áp lực cho con.",
    category: "Kiến thức",
    date: "2026-07-20",
    readingTime: "6 phút đọc",
    gradient: "var(--grad-brand)",
    sections: [
      {
        paragraphs: [
          "\"Con mấy tuổi thì nên học tiếng Anh?\" là câu hỏi mà hầu như phụ huynh nào cũng từng băn khoăn. Người nói 3 tuổi là muộn, người lại bảo cứ để con vào lớp 1 rồi tính. Vậy khoa học ngôn ngữ nói gì về chuyện này?",
        ],
      },
      {
        heading: "Giai đoạn nhạy cảm với ngôn ngữ",
        paragraphs: [
          "Các nghiên cứu về thụ đắc ngôn ngữ chỉ ra rằng não bộ trẻ từ 0–7 tuổi có khả năng tiếp nhận âm thanh ngôn ngữ vượt trội. Ở giai đoạn này, trẻ phân biệt và bắt chước âm mới gần như tự nhiên — đó là lý do trẻ tiếp xúc tiếng Anh sớm thường có phát âm chuẩn hơn hẳn người học muộn.",
          "Sau khoảng 10–12 tuổi, khả năng này giảm dần. Trẻ vẫn học được — thậm chí học ngữ pháp nhanh hơn nhờ tư duy logic phát triển — nhưng để đạt phát âm gần với người bản xứ thì sẽ khó hơn nhiều.",
        ],
      },
      {
        heading: "Sớm không có nghĩa là ép",
        paragraphs: [
          "Điều quan trọng cần phân biệt: tiếp xúc sớm khác với học hành áp lực sớm. Trẻ 3–5 tuổi không cần ngồi vào bàn chép từ vựng. Ở tuổi này, 'học' hiệu quả nhất là nghe nhạc tiếng Anh, xem hoạt hình phù hợp lứa tuổi, chơi trò chơi có yếu tố tiếng Anh cùng bố mẹ.",
          "Nếu bị ép học kiểu 'trả bài', trẻ rất dễ hình thành cảm giác sợ — và nỗi sợ đó có thể theo con suốt hành trình học ngôn ngữ về sau.",
        ],
      },
      {
        heading: "Vậy bắt đầu từ đâu theo từng độ tuổi?",
        list: [
          "0–3 tuổi: cho con nghe nhạc, bài hát tiếng Anh đơn giản; bố mẹ đọc truyện tranh song ngữ.",
          "3–6 tuổi: hoạt hình tiếng Anh có kiểm soát thời lượng, các lớp học qua trò chơi và vận động.",
          "6–9 tuổi: bắt đầu học bài bản với giáo trình phù hợp, ưu tiên nghe – nói trước, đọc – viết sau.",
          "9–12 tuổi: xây nền ngữ pháp và từ vựng học thuật, có thể hướng tới các chứng chỉ thiếu nhi như Cambridge Starters/Movers/Flyers.",
        ],
      },
      {
        heading: "Lời kết",
        paragraphs: [
          "Không có một 'độ tuổi hoàn hảo' duy nhất cho mọi đứa trẻ. Nguyên tắc quan trọng nhất: bắt đầu càng sớm càng thuận lợi, nhưng phải đúng cách — nhẹ nhàng, vui vẻ và đều đặn. Một đứa trẻ yêu tiếng Anh từ nhỏ sẽ tự đi xa hơn mọi lộ trình mà người lớn vạch sẵn.",
        ],
      },
    ],
  },
  {
    slug: "hoc-tieng-anh-qua-tro-choi",
    title: "7 trò chơi giúp con học tiếng Anh tại nhà mà không cần màn hình",
    excerpt:
      "Không cần app, không cần iPad — chỉ với giấy bút và 15 phút mỗi ngày, bố mẹ có thể biến tiếng Anh thành trò chơi con mong chờ nhất trong ngày.",
    category: "Mẹo cho phụ huynh",
    date: "2026-07-14",
    readingTime: "5 phút đọc",
    gradient: "var(--grad-mint)",
    sections: [
      {
        paragraphs: [
          "Trẻ con học nhanh nhất khi chúng không biết mình đang học. Dưới đây là 7 trò chơi đơn giản, không cần thiết bị điện tử, mà bất kỳ bố mẹ nào — kể cả không giỏi tiếng Anh — cũng có thể chơi cùng con mỗi ngày.",
        ],
      },
      {
        heading: "1. Săn kho báu từ vựng (Word Hunt)",
        paragraphs: [
          "Viết 5–7 từ tiếng Anh lên giấy nhớ (apple, chair, door...), dán quanh nhà đúng vào đồ vật tương ứng. Mỗi tối, tráo vị trí vài tờ và nhờ con 'sửa lại cho đúng'. Con vừa vận động, vừa gắn từ với vật thật — cách ghi nhớ tự nhiên nhất.",
        ],
      },
      {
        heading: "2. Simon Says phiên bản gia đình",
        paragraphs: [
          "Trò kinh điển: 'Simon says touch your nose!' — con chỉ làm theo khi có câu 'Simon says'. Trò này luyện nghe hiểu mệnh lệnh, từ vựng bộ phận cơ thể và hành động, và quan trọng nhất: cả nhà cười rất nhiều.",
        ],
      },
      {
        heading: "3. Đoán đồ vật trong túi (Mystery Bag)",
        paragraphs: [
          "Bỏ một đồ vật vào túi vải, cho con sờ và đoán bằng tiếng Anh: 'Is it big? Is it soft? It's a ball!'. Trò chơi luyện câu hỏi Yes/No và tính từ mô tả — những mẫu câu nền tảng nhất.",
        ],
      },
      {
        heading: "4. Vẽ theo lời kể (Listen and Draw)",
        paragraphs: [
          "Bố mẹ mô tả bằng tiếng Anh đơn giản: 'Draw a big sun. Draw two birds.' — con vẽ theo. Sau đó đổi vai để con mô tả cho bố mẹ vẽ. Nghe hiểu và nói đều được luyện trong một trò.",
        ],
      },
      {
        heading: "5. Ai nhanh hơn (Flashcard Slap)",
        paragraphs: [
          "Trải 8–10 thẻ từ vựng lên bàn. Bố mẹ hô to một từ, ai đập tay vào thẻ đúng trước thì thắng. Trẻ nào cũng mê trò này — và tốc độ nhận diện từ của con sẽ tăng rõ rệt sau vài tuần.",
        ],
      },
      {
        heading: "6. Đóng vai cửa hàng (Shop Role-play)",
        paragraphs: [
          "Bày vài món đồ chơi làm 'cửa hàng', con làm người bán, bố mẹ làm khách: 'How much is this? Two dollars, please!'. Mẫu câu giao tiếp thực tế, con nhớ rất lâu vì được 'sống' trong tình huống.",
        ],
      },
      {
        heading: "7. Kể chuyện tiếp sức (Story Chain)",
        paragraphs: [
          "Mỗi người nói một câu tiếng Anh để nối thành câu chuyện: 'One day, a cat...' — 'The cat saw a fish...'. Với trẻ mới học, chấp nhận cả câu 'nửa Anh nửa Việt'. Mục tiêu là con dám nói, không phải nói hoàn hảo.",
        ],
      },
      {
        heading: "Bí quyết để duy trì",
        list: [
          "Chơi ngắn thôi: 10–15 phút mỗi ngày tốt hơn 2 tiếng cuối tuần.",
          "Cố định 'giờ chơi tiếng Anh' để thành thói quen, ví dụ sau bữa tối.",
          "Khen nỗ lực, đừng sửa lỗi liên tục — sai mà dám nói vẫn đáng khen hơn im lặng.",
          "Cho con thắng thường xuyên lúc đầu để giữ hứng thú.",
        ],
      },
    ],
  },
  {
    slug: "chon-trung-tam-tieng-anh-cho-con",
    title: "8 tiêu chí chọn trung tâm tiếng Anh cho con mà phụ huynh cần biết",
    excerpt:
      "Học phí đắt chưa chắc đã tốt, gần nhà chưa chắc đã phù hợp. Đây là bộ 8 tiêu chí giúp bố mẹ đánh giá một trung tâm tiếng Anh trẻ em một cách tỉnh táo.",
    category: "Cẩm nang chọn trường",
    date: "2026-07-07",
    readingTime: "7 phút đọc",
    gradient: "var(--grad-sunrise)",
    sections: [
      {
        paragraphs: [
          "Thị trường trung tâm tiếng Anh trẻ em chưa bao giờ sôi động như hiện nay — và cũng chưa bao giờ khiến phụ huynh bối rối đến vậy. Quảng cáo nào cũng '100% giáo viên bản ngữ', 'phương pháp độc quyền'. Vậy đâu là những tiêu chí thực chất để đánh giá?",
        ],
      },
      {
        heading: "1. Giáo viên: bằng cấp thật, không chỉ quốc tịch",
        paragraphs: [
          "'Giáo viên bản ngữ' không đồng nghĩa với 'giáo viên giỏi'. Hãy hỏi thẳng trung tâm: giáo viên có chứng chỉ giảng dạy (TESOL, CELTA, TEFL) không? Có kinh nghiệm dạy trẻ em — vốn rất khác dạy người lớn — hay không? Một giáo viên Việt Nam giỏi chuyên môn, hiểu tâm lý trẻ có thể hiệu quả hơn một người nước ngoài không có nghiệp vụ sư phạm.",
        ],
      },
      {
        heading: "2. Sĩ số lớp",
        paragraphs: [
          "Với trẻ em, lớp 8–12 bé là lý tưởng: đủ đông để có hoạt động nhóm, đủ ít để mỗi bé được nói nhiều lần trong buổi học. Lớp trên 20 bé thì dù giáo viên giỏi đến đâu, thời gian thực hành của mỗi con cũng bị chia mỏng.",
        ],
      },
      {
        heading: "3. Giáo trình và lộ trình rõ ràng",
        paragraphs: [
          "Trung tâm tốt sẽ cho bạn biết con đang ở trình độ nào, học giáo trình gì, sau 6 tháng – 1 năm sẽ đạt được gì, và đo lường bằng cách nào. Nếu câu trả lời chỉ là 'bé sẽ tiến bộ nhanh lắm' mà không có lộ trình cụ thể, hãy thận trọng.",
        ],
      },
      {
        heading: "4. Học thử trước khi đóng tiền",
        paragraphs: [
          "Buổi học thử là bài kiểm tra tốt nhất. Đừng chỉ nhìn con có vui không — hãy quan sát: giáo viên có gọi tên từng bé không? Bé rụt rè có được khuyến khích tham gia không? Lớp vui nhưng có nội dung học thật không, hay chỉ toàn trò chơi?",
        ],
      },
      {
        heading: "5. Cơ chế phản hồi với phụ huynh",
        paragraphs: [
          "Con học gì hôm nay, tiến bộ ở đâu, cần cải thiện gì — trung tâm chuyên nghiệp sẽ có báo cáo định kỳ và kênh liên lạc rõ ràng với phụ huynh, thay vì để bạn 'gửi con rồi chờ hết khóa'.",
        ],
      },
      {
        heading: "6. Chi phí minh bạch",
        paragraphs: [
          "Hỏi kỹ: học phí đã gồm giáo trình, tài liệu chưa? Nghỉ ốm có được học bù không? Chính sách hoàn phí nếu con không hợp ra sao? Trung tâm uy tín không ngại trả lời những câu hỏi này bằng văn bản.",
        ],
      },
      {
        heading: "7. Khoảng cách địa lý",
        paragraphs: [
          "Nghe có vẻ tầm thường, nhưng đây là lý do bỏ học giữa chừng phổ biến nhất. Một trung tâm 'tốt vừa đủ' cách nhà 10 phút thường mang lại kết quả tốt hơn trung tâm 'xuất sắc' cách nhà 45 phút — vì điều quan trọng nhất với trẻ là sự đều đặn.",
        ],
      },
      {
        heading: "8. Cảm nhận của chính con",
        paragraphs: [
          "Sau buổi học thử, hãy hỏi con: 'Con có muốn quay lại lớp đó không?'. Trẻ con không biết đánh giá giáo trình, nhưng cảm nhận của con về lớp học, cô giáo, bạn bè là chỉ báo trung thực nhất về việc con có gắn bó lâu dài được hay không.",
        ],
      },
      {
        heading: "Checklist nhanh cho buổi tham quan trung tâm",
        list: [
          "Giáo viên có chứng chỉ giảng dạy và kinh nghiệm dạy trẻ em?",
          "Sĩ số lớp bao nhiêu bé?",
          "Lộ trình học và cách đánh giá tiến bộ có rõ ràng, bằng văn bản?",
          "Có buổi học thử miễn phí không?",
          "Báo cáo học tập cho phụ huynh định kỳ thế nào?",
          "Học phí trọn gói hay còn phụ phí? Chính sách học bù, hoàn phí?",
          "Quãng đường đưa đón có duy trì được 2–3 buổi/tuần trong cả năm?",
          "Con có thích và muốn quay lại không?",
        ],
      },
    ],
  },
  {
    slug: "tre-xem-youtube-tieng-anh",
    title: "Con xem YouTube tiếng Anh cả ngày — có thực sự học được không?",
    excerpt:
      "Nhiều bé 'nói tiếng Anh như gió' nhờ YouTube nhưng không giao tiếp được. Giải mã hiện tượng này và cách biến thời gian xem màn hình thành giờ học thật.",
    category: "Kiến thức",
    date: "2026-06-28",
    readingTime: "6 phút đọc",
    gradient: "var(--grad-sky)",
    sections: [
      {
        paragraphs: [
          "Không ít phụ huynh vừa mừng vừa lo: con mới 4–5 tuổi đã hát vanh vách bài hát tiếng Anh, đọc số đếm, gọi tên màu sắc — tất cả nhờ YouTube. Nhưng khi được hỏi chuyện đơn giản bằng tiếng Anh, con lại im lặng. Vậy con có đang thực sự học không?",
        ],
      },
      {
        heading: "Xem nhiều tạo ra 'ngôn ngữ thụ động'",
        paragraphs: [
          "Video mang lại lượng nghe (input) khổng lồ, giúp trẻ quen âm điệu, tích lũy từ vựng và bắt chước phát âm. Đó là giá trị thật, không thể phủ nhận.",
          "Nhưng ngôn ngữ có hai chiều: tiếp nhận và sản sinh. Màn hình không bao giờ hỏi lại con, không chờ con trả lời, không sửa khi con nói sai. Trẻ chỉ xem mà không tương tác sẽ giỏi 'nhại lại' nhưng yếu khả năng dùng ngôn ngữ để giao tiếp thật — hiện tượng nhiều người gọi vui là 'tiếng Anh YouTube'.",
        ],
      },
      {
        heading: "Rủi ro ít được nói đến",
        list: [
          "Xem quá nhiều giờ mỗi ngày ảnh hưởng đến giấc ngủ, thị lực và khả năng tập trung.",
          "Thuật toán gợi ý có thể dẫn trẻ đến nội dung không phù hợp nếu không giám sát.",
          "Một số trẻ tiếp xúc màn hình quá sớm và quá nhiều có dấu hiệu chậm nói tiếng mẹ đẻ.",
        ],
      },
      {
        heading: "Biến giờ xem thành giờ học: nguyên tắc 'xem cùng và nói theo'",
        paragraphs: [
          "Giải pháp không phải là cấm, mà là thay đổi cách xem. Các chuyên gia gọi đây là 'co-viewing' — xem cùng con:",
        ],
        list: [
          "Giới hạn thời lượng theo tuổi: dưới 6 tuổi khoảng 30–60 phút/ngày là đủ.",
          "Chọn kênh có tính tương tác, nhịp chậm, lời thoại rõ (ví dụ chương trình thiếu nhi có gợi ý trẻ trả lời).",
          "Ngồi xem cùng con ít nhất một phần thời gian, dừng video để hỏi: 'What color is it?', 'Where is the cat?'.",
          "Sau khi xem, chơi lại nội dung vừa xem: hát lại bài hát, đóng vai nhân vật, vẽ lại cảnh con thích.",
          "Cân bằng với hoạt động không màn hình: đọc truyện, trò chơi vận động, lớp học có bạn bè.",
        ],
      },
      {
        heading: "Kết luận",
        paragraphs: [
          "YouTube là công cụ nghe tuyệt vời nhưng là 'người thầy' tồi nếu đứng một mình. Công thức hợp lý: video là nguồn đầu vào, bố mẹ và lớp học là nơi con được nói, được hỏi, được sửa. Khi ba mảnh ghép này khớp nhau, thời gian màn hình của con mới thực sự chuyển hóa thành năng lực ngôn ngữ.",
        ],
      },
    ],
  },
  {
    slug: "lo-trinh-hoc-tieng-anh-cho-tre-4-12-tuoi",
    title: "Lộ trình học tiếng Anh cho trẻ 4–12 tuổi: nền tảng đến tự tin giao tiếp",
    excerpt:
      "Một lộ trình tham khảo theo từng giai đoạn — từ làm quen với âm thanh đến luyện chứng chỉ Cambridge — giúp bố mẹ định hướng dài hạn thay vì học theo phong trào.",
    category: "Lộ trình học",
    date: "2026-06-18",
    readingTime: "8 phút đọc",
    gradient: "var(--grad-peach)",
    sections: [
      {
        paragraphs: [
          "Sai lầm phổ biến nhất khi cho con học tiếng Anh không phải là chọn sai trung tâm, mà là học không có lộ trình: thấy bạn bè học gì thì học nấy, đổi phương pháp liên tục, được vài tháng lại nghỉ. Bài viết này phác thảo một lộ trình tham khảo theo độ tuổi để bố mẹ có bức tranh dài hạn.",
        ],
      },
      {
        heading: "Giai đoạn 1 (4–6 tuổi): Làm quen và yêu thích",
        paragraphs: [
          "Mục tiêu duy nhất của giai đoạn này: con thấy tiếng Anh là điều vui vẻ. Trọng tâm là nghe và nói qua bài hát, trò chơi, truyện tranh; nhận diện bảng chữ cái và làm quen với phonics (ngữ âm) cơ bản.",
        ],
        list: [
          "Từ vựng chủ đề gần gũi: gia đình, con vật, màu sắc, đồ ăn, cơ thể.",
          "Nghe – lặp lại các mẫu câu ngắn: 'I like...', 'This is...', 'Can I have...?'.",
          "Chưa cần viết nhiều; tô chữ và nhận mặt chữ là đủ.",
          "Kết quả mong đợi: con chủ động hát, đếm số, gọi tên đồ vật bằng tiếng Anh.",
        ],
      },
      {
        heading: "Giai đoạn 2 (6–8 tuổi): Xây nền phonics và câu đơn",
        paragraphs: [
          "Khi con vào tiểu học và đã đọc được tiếng Việt, đây là lúc học phonics bài bản để con tự đọc được từ mới, đồng thời bắt đầu viết câu đơn giản.",
        ],
        list: [
          "Hoàn thiện phonics: đánh vần và đọc được từ 1–2 âm tiết chưa gặp bao giờ.",
          "Đọc truyện tranh mức độ dễ (graded readers) 5–10 phút mỗi ngày.",
          "Viết câu đơn về bản thân: 'I have a dog. My dog is black.'",
          "Cột mốc tham khảo: chứng chỉ Cambridge Pre A1 Starters.",
        ],
      },
      {
        heading: "Giai đoạn 3 (8–10 tuổi): Mở rộng giao tiếp và ngữ pháp nền",
        paragraphs: [
          "Con đã có vốn nghe – nói cơ bản; giai đoạn này mở rộng sang các thì cơ bản, câu hỏi và kỹ năng trình bày ngắn.",
        ],
        list: [
          "Nói thành đoạn 3–5 câu về chủ đề quen thuộc: trường học, sở thích, kỳ nghỉ.",
          "Ngữ pháp qua ngữ cảnh: hiện tại đơn, hiện tại tiếp diễn, quá khứ đơn.",
          "Đọc hiểu đoạn văn ngắn, trả lời câu hỏi; viết đoạn 30–50 từ.",
          "Cột mốc tham khảo: Cambridge A1 Movers.",
        ],
      },
      {
        heading: "Giai đoạn 4 (10–12 tuổi): Tự tin và hướng tới học thuật",
        paragraphs: [
          "Trước ngưỡng cửa cấp 2, mục tiêu là con dùng tiếng Anh như công cụ: đọc để tìm thông tin, viết để trình bày ý kiến, nói để thuyết trình.",
        ],
        list: [
          "Thuyết trình 2–3 phút có chuẩn bị về chủ đề con chọn.",
          "Viết đoạn văn 60–80 từ có mở – thân – kết.",
          "Nghe hiểu video, câu chuyện dài hơn với tốc độ tự nhiên.",
          "Cột mốc tham khảo: Cambridge A2 Flyers, hướng tới KET (A2 Key) ở đầu cấp 2.",
        ],
      },
      {
        heading: "Ba nguyên tắc xuyên suốt mọi giai đoạn",
        list: [
          "Đều đặn thắng cường độ: 20–30 phút mỗi ngày hiệu quả hơn 3 tiếng dồn vào cuối tuần.",
          "Nghe – nói trước, đọc – viết sau: đúng trình tự thụ đắc ngôn ngữ tự nhiên.",
          "Chứng chỉ là cột mốc, không phải mục tiêu: đừng biến kỳ thi thành áp lực khiến con mất niềm vui học.",
        ],
      },
      {
        heading: "Lời kết",
        paragraphs: [
          "Mỗi đứa trẻ có nhịp phát triển riêng — lộ trình trên là khung tham khảo, không phải thước đo để so sánh con với 'con nhà người ta'. Điều quan trọng nhất bố mẹ có thể làm: giữ cho hành trình học của con liên tục, vui vẻ và được đồng hành đúng cách.",
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
