export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogCta = {
  heading: string;
  body: string;
  label: string;
  href: string;
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
  cta?: BlogCta; // optional per-post CTA; falls back to the default B2B block when absent
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cau-truc-de-thi-toeic-4-ky-nang-2-ky-nang",
    title: "Cấu trúc đề thi TOEIC 4 kỹ năng & 2 kỹ năng mới nhất 2026",
    excerpt:
      "Đề TOEIC gồm những phần nào, bao nhiêu câu và chấm điểm ra sao? Giải thích rõ cấu trúc TOEIC 2 kỹ năng (Nghe – Đọc) và 4 kỹ năng (thêm Nói – Viết) theo format hiện hành.",
    category: "Luyện thi TOEIC",
    date: "2026-07-23",
    readingTime: "7 phút đọc",
    gradient: "var(--grad-sky)",
    sections: [
      {
        paragraphs: [
          "Trước khi bắt đầu luyện thi TOEIC, có một việc nên làm đầu tiên mà nhiều người bỏ qua: hiểu rõ đề thi gồm những gì. Biết cấu trúc đề không chỉ giúp bạn phân bổ thời gian ôn hợp lý, mà còn tránh cảm giác hoảng khi lần đầu ngồi vào phòng thi.",
          "Bài viết này mô tả đầy đủ cấu trúc đề thi TOEIC theo format hiện hành — cả bản 2 kỹ năng (Nghe – Đọc) quen thuộc lẫn bản 4 kỹ năng (thêm Nói – Viết) — kèm số câu, thời gian và cách tính điểm, để bạn hình dung được mình sẽ đối mặt với điều gì.",
        ],
      },
      {
        heading: "TOEIC 2 kỹ năng: Nghe và Đọc (Listening & Reading)",
        paragraphs: [
          "Đây là bài thi TOEIC phổ biến nhất, thường được nhắc đến khi ai đó nói 'thi TOEIC'. Bài gồm 200 câu trắc nghiệm, làm trong 120 phút, thang điểm từ 10 đến 990 — trong đó kỹ năng Nghe và kỹ năng Đọc mỗi bên tối đa 495 điểm. Đề chia làm 7 phần (part):",
        ],
        list: [
          "Part 1 – Mô tả tranh (6 câu): nghe và chọn câu mô tả đúng bức ảnh.",
          "Part 2 – Hỏi đáp (25 câu): nghe một câu hỏi và chọn câu trả lời phù hợp.",
          "Part 3 – Đoạn hội thoại (39 câu): nghe hội thoại ngắn giữa 2–3 người rồi trả lời.",
          "Part 4 – Bài nói ngắn (30 câu): nghe một đoạn độc thoại như thông báo, quảng cáo.",
          "Part 5 – Hoàn thành câu (30 câu): chọn từ điền vào chỗ trống, kiểm tra ngữ pháp và từ vựng.",
          "Part 6 – Hoàn thành đoạn văn (16 câu): điền từ vào một đoạn văn hoàn chỉnh.",
          "Part 7 – Đọc hiểu (54 câu): đọc email, bài báo, thông báo... và trả lời câu hỏi.",
        ],
      },
      {
        paragraphs: [
          "Bốn phần đầu (Part 1–4, 100 câu) là kỹ năng Nghe, kéo dài khoảng 45 phút theo băng. Ba phần sau (Part 5–7, 100 câu) là kỹ năng Đọc, bạn tự phân bổ trong 75 phút còn lại. Vì thời gian phần Đọc do bạn tự quản, biết trước cấu trúc giúp bạn không sa đà vào Part 7 mà bỏ lỡ những câu dễ ăn điểm ở Part 5.",
        ],
      },
      {
        heading: "TOEIC 4 kỹ năng: thêm Nói và Viết (Speaking & Writing)",
        paragraphs: [
          "Bản 4 kỹ năng giữ nguyên bài Nghe – Đọc ở trên và bổ sung hai bài thi riêng: Nói (Speaking) và Viết (Writing), thường làm trên máy tính và tách biệt với bài Nghe – Đọc.",
        ],
        list: [
          "Speaking: 11 câu hỏi, khoảng 20 phút, thang điểm 0–200. Gồm đọc to đoạn văn, mô tả tranh, trả lời câu hỏi và nêu – bảo vệ ý kiến.",
          "Writing: 8 câu hỏi, khoảng 60 phút, thang điểm 0–200. Gồm viết câu theo tranh, trả lời email và viết bài luận nêu quan điểm.",
        ],
      },
      {
        paragraphs: [
          "Nói cách khác, khi nghe cụm 'TOEIC 4 kỹ năng', thực chất bạn thi hai bài: một bài Nghe – Đọc và một bài Nói – Viết, mỗi bài có thang điểm và chứng chỉ riêng.",
        ],
      },
      {
        heading: "Cách tính điểm và mức điểm nên nhắm tới",
        paragraphs: [
          "Bài Nghe – Đọc cho điểm từ 10 đến 990. Điểm không phải là số câu đúng nhân lên, mà quy đổi theo bảng chuẩn của đơn vị tổ chức, nên hai người cùng số câu đúng vẫn có thể lệch nhau đôi chút. Một vài mốc để bạn định hình mục tiêu:",
        ],
        list: [
          "450–600: đủ cho nhiều yêu cầu tốt nghiệp đại học và một số vị trí công việc cơ bản.",
          "600–750: mức phổ biến mà nhà tuyển dụng mong đợi cho công việc có dùng tiếng Anh.",
          "750–990: lợi thế rõ rệt khi xin việc, xét học bổng hoặc thăng tiến.",
        ],
      },
      {
        paragraphs: [
          "Với bài Nói – Viết, mỗi kỹ năng chấm từ 0 đến 200 và quy về các mức trình độ. Chứng chỉ TOEIC — cả hai loại — có hiệu lực 2 năm kể từ ngày thi.",
        ],
      },
      {
        heading: "Nên thi 2 kỹ năng hay 4 kỹ năng?",
        paragraphs: [
          "Câu trả lời phụ thuộc vào mục tiêu. Nếu bạn cần TOEIC để tốt nghiệp hoặc ứng tuyển ở nơi chỉ yêu cầu điểm Nghe – Đọc, bản 2 kỹ năng là đủ và tiết kiệm hơn. Nếu công việc hoặc chương trình học yêu cầu chứng minh cả khả năng nói và viết, bạn sẽ cần bản 4 kỹ năng.",
          "Lời khuyên thực tế: kiểm tra kỹ yêu cầu cụ thể của trường hoặc công ty trước khi đăng ký, tránh thi thừa hoặc thiếu kỹ năng rồi phải thi lại.",
        ],
      },
      {
        heading: "Ôn theo cấu trúc, đừng ôn dàn trải",
        paragraphs: [
          "Khi đã nắm cấu trúc, việc ôn trở nên có trọng tâm hơn. Phần Nghe (Part 3–4) và phần Đọc (Part 7) chiếm nhiều câu nhất và cũng là nơi dễ mất điểm nhất, nên xứng đáng được đầu tư thời gian nhiều hơn Part 1 hay Part 5. Thay vì làm đề tràn lan, hãy luyện từng phần đến khi ổn định rồi mới ghép thành đề hoàn chỉnh.",
          "Một lộ trình rõ ràng, có người chấm chữa và cam kết mức điểm đầu ra sẽ rút ngắn đáng kể thời gian so với tự mò mẫm — nhất là ở hai kỹ năng Nói và Viết, vốn rất khó tự đánh giá.",
        ],
      },
    ],
    cta: {
      heading: "Muốn đạt đúng mức điểm TOEIC bạn cần?",
      body: "TAEC luyện thi TOEIC 2 và 4 kỹ năng, cam kết đầu ra bằng văn bản, với 5 cơ sở tại TP.HCM và lớp học online. Đăng ký học thử miễn phí để được xếp lộ trình theo đúng trình độ hiện tại.",
      label: "Học thử miễn phí cùng TAEC",
      href: "https://taec.affluence.vn/",
    },
  },
  {
    slug: "dang-ky-thi-toeic-lich-thi-le-phi-tphcm",
    title: "Đăng ký thi TOEIC 2026: lịch thi, lệ phí, địa điểm tại TP.HCM",
    excerpt:
      "Thi TOEIC ở đâu tại TP.HCM, lệ phí bao nhiêu, đăng ký thế nào và cần chuẩn bị gì? Hướng dẫn đăng ký thi TOEIC 2026 từ A đến Z cho người thi lần đầu.",
    category: "Luyện thi TOEIC",
    date: "2026-07-23",
    readingTime: "6 phút đọc",
    gradient: "var(--grad-sunrise)",
    sections: [
      {
        paragraphs: [
          "Bạn đã ôn TOEIC một thời gian và muốn đăng ký thi, nhưng chưa rõ thi ở đâu, lệ phí bao nhiêu và thủ tục thế nào? Bài viết này đi qua toàn bộ quy trình đăng ký thi TOEIC tại TP.HCM năm 2026, dành cho người thi lần đầu.",
          "Lưu ý trước: lịch thi và lệ phí do đơn vị tổ chức công bố và có thể thay đổi theo từng thời điểm, nên hãy xem các con số dưới đây là mức tham khảo và kiểm tra lại trên trang chính thức trước khi đăng ký.",
        ],
      },
      {
        heading: "Thi TOEIC ở đâu tại TP.HCM?",
        paragraphs: [
          "Tại Việt Nam, kỳ thi TOEIC chính thức được tổ chức bởi IIG Việt Nam — đại diện của ETS, đơn vị ra đề TOEIC. Ở TP.HCM có nhiều điểm thi được ủy quyền, thường nằm ở khu vực trung tâm và các quận đông dân. Bạn đăng ký qua IIG và được xếp vào điểm thi theo lịch còn chỗ.",
          "Ngoài ra, một số trường đại học và trung tâm liên kết cũng tổ chức thi nội bộ. Nhưng nếu cần chứng chỉ TOEIC có giá trị rộng rãi để xin việc hay du học, nên thi qua kỳ thi chính thức của IIG.",
        ],
      },
      {
        heading: "Lệ phí thi TOEIC bao nhiêu?",
        paragraphs: [
          "Lệ phí phụ thuộc vào loại bài thi bạn chọn:",
        ],
        list: [
          "TOEIC 2 kỹ năng (Nghe – Đọc): mức tham khảo khoảng trên dưới 1.000.000đ.",
          "TOEIC 4 kỹ năng (thêm Nói – Viết): cao hơn đáng kể do phải thi thêm hai kỹ năng.",
        ],
      },
      {
        paragraphs: [
          "Vì mức phí được cập nhật theo từng năm, hãy xác nhận con số chính xác trên trang của IIG Việt Nam tại thời điểm bạn đăng ký. Thi lại sẽ đóng phí lại từ đầu, nên chỉ nên đăng ký khi đã tự tin đạt mức điểm mục tiêu.",
        ],
      },
      {
        heading: "Các bước đăng ký",
        list: [
          "Bước 1: Chọn loại bài thi (2 hay 4 kỹ năng) theo đúng yêu cầu của trường hoặc công ty.",
          "Bước 2: Vào trang đăng ký của IIG Việt Nam, chọn ngày thi và điểm thi còn chỗ.",
          "Bước 3: Điền thông tin cá nhân đúng như trên CCCD — sai tên sẽ ảnh hưởng đến chứng chỉ.",
          "Bước 4: Thanh toán lệ phí theo hướng dẫn và giữ lại biên nhận.",
          "Bước 5: Nhận email xác nhận lịch thi và địa điểm, in hoặc lưu lại để mang đi thi.",
        ],
      },
      {
        heading: "Ngày thi cần chuẩn bị gì?",
        list: [
          "CCCD/CMND bản gốc còn hạn — bắt buộc, không có sẽ không được vào phòng thi.",
          "Có mặt sớm khoảng 30 phút để làm thủ tục và ổn định tinh thần.",
          "Bút chì, tẩy nếu thi trên giấy; nếu thi trên máy, nên làm quen trước với giao diện.",
          "Ngủ đủ giấc đêm trước — điều này thường quan trọng hơn việc cố ôn thêm một đề.",
        ],
      },
      {
        heading: "Chứng chỉ có hiệu lực bao lâu?",
        paragraphs: [
          "Chứng chỉ TOEIC có giá trị trong 2 năm kể từ ngày thi. Vì vậy nên căn thời điểm thi sao cho chứng chỉ còn hiệu lực đúng lúc bạn cần dùng — chẳng hạn khi nộp hồ sơ tốt nghiệp hoặc xin việc — tránh thi quá sớm rồi hết hạn ngay trước khi cần.",
        ],
      },
      {
        heading: "Đừng đăng ký thi khi chưa sẵn sàng",
        paragraphs: [
          "Sai lầm tốn kém nhất là đăng ký thi theo phong trào rồi bước vào phòng thi khi kiến thức còn chưa chắc. Mỗi lần thi là một lần đóng phí, nên cách tiết kiệm nhất thật ra là chuẩn bị chắc chắn để chỉ thi một lần là đạt luôn mức điểm cần.",
          "Nếu bạn còn cách mục tiêu một khoảng, một khóa luyện thi có lộ trình rõ ràng và thi thử sát đề sẽ giúp bạn biết chính xác khi nào nên đăng ký thi thật.",
        ],
      },
    ],
    cta: {
      heading: "Chưa chắc đã đạt điểm mục tiêu?",
      body: "TAEC luyện thi TOEIC cam kết đầu ra, có thi thử sát đề để bạn biết mình đã sẵn sàng hay chưa trước khi đóng lệ phí thi thật. 5 cơ sở tại TP.HCM và lớp học online.",
      label: "Nhận tư vấn lộ trình TOEIC",
      href: "https://taec.affluence.vn/",
    },
  },
  {
    slug: "cach-tuyen-sinh-cho-trung-tam-tieng-anh",
    title: "7 kênh tuyển sinh cho trung tâm tiếng Anh — kênh nào đáng tiền năm 2026?",
    excerpt:
      "Tờ rơi hết thời chưa? Facebook ads còn hiệu quả không? Một bài tổng kết thẳng thắn về 7 kênh tuyển sinh phổ biến, kênh nào nên giữ, kênh nào nên nghĩ lại.",
    category: "Dành cho trung tâm",
    date: "2026-07-22",
    readingTime: "8 phút đọc",
    gradient: "var(--grad-warm)",
    sections: [
      {
        paragraphs: [
          "Cứ đến mùa tuyển sinh, câu hỏi muôn thuở của các chủ trung tâm lại quay về: năm nay đổ ngân sách vào đâu? Ai cũng có một danh sách kênh na ná nhau, nhưng ít ai ngồi tính sòng phẳng xem mỗi kênh thực sự mang về bao nhiêu học viên trên mỗi đồng bỏ ra.",
          "Làm việc với hàng chục trung tâm lớn nhỏ, chúng tôi có cơ hội nhìn thấy con số thật của khá nhiều mô hình. Dưới đây là tổng kết thẳng thắn về 7 kênh phổ biến nhất — không kênh nào là 'thần thánh', nhưng có kênh đang bị đánh giá quá cao, và có kênh bị bỏ quên một cách đáng tiếc.",
        ],
      },
      {
        heading: "1. Truyền miệng — vẫn là vua, nhưng đừng để nó tự nhiên",
        paragraphs: [
          "Hỏi 10 trung tâm đang sống khỏe thì 8 nơi sẽ nói học viên mới đến chủ yếu từ giới thiệu. Chi phí gần như bằng không, tỷ lệ chốt cao nhất trong mọi kênh — vì phụ huynh tin phụ huynh hơn tin quảng cáo.",
          "Vấn đề là đa số để kênh này chạy 'tự nhiên'. Trong khi chỉ cần một cơ chế nhỏ — giảm học phí tháng cho phụ huynh giới thiệu thành công, quà cho bé có bạn vào học — là dòng giới thiệu có thể tăng gấp rưỡi. Kênh tốt nhất của bạn xứng đáng có một chương trình tử tế, thay vì chỉ là lời cảm ơn.",
        ],
      },
      {
        heading: "2. Facebook Ads — hiệu quả thật, đốt tiền cũng thật",
        paragraphs: [
          "Vẫn là kênh chủ lực của phần lớn trung tâm, và vẫn ra số nếu làm đúng. Nhưng chi phí mỗi lead đã tăng đều qua từng năm, và lead từ form quảng cáo thì chất lượng ngày càng loãng — điền cho vui, số sai, 'em hỏi cho chị em'.",
          "Kinh nghiệm chung: Facebook Ads chỉ đáng tiền khi đội sale gọi lead trong vòng 15 phút và có kịch bản chăm rõ ràng. Ads giỏi mà chăm lead kém thì tiền vẫn trôi — chi tiết hơn ở bài về 6 lý do quảng cáo không ra học viên.",
        ],
      },
      {
        heading: "3. Google — đón đúng người đang tìm",
        paragraphs: [
          "Người gõ 'trung tâm tiếng Anh cho bé quận Tân Bình' là người đang thực sự cần — khác hẳn người lướt Facebook bị quảng cáo chen ngang. Ba việc đáng làm theo thứ tự: hoàn thiện Google Business Profile (miễn phí, ra khách khu vực tốt đến bất ngờ), viết nội dung trả lời đúng câu hỏi phụ huynh hay tìm, và nếu có ngân sách thì chạy Google Ads cho các từ khóa địa phương.",
        ],
      },
      {
        heading: "4. TikTok — thương hiệu tốt, ra số chậm",
        paragraphs: [
          "Video lớp học vui nhộn, cô giáo duyên dáng có thể kéo trăm nghìn lượt xem và làm tên tuổi trung tâm phủ rất nhanh. Nhưng từ lượt xem đến phụ huynh xuống tiền là quãng đường dài. Nên xem TikTok là kênh xây thương hiệu dài hạn — đáng làm nếu có người làm nội dung ổn định — chứ đừng kỳ vọng nó gánh chỉ tiêu tuyển sinh quý này.",
        ],
      },
      {
        heading: "5. Tờ rơi và sự kiện tại trường — cũ nhưng chưa hết thời",
        paragraphs: [
          "Nghe 'cổ điển' nhưng với mô hình trung tâm phục vụ bán kính 3–5km quanh cơ sở, một buổi sự kiện tại trường tiểu học lân cận hay một đợt phát tờ rơi kèm mã học thử miễn phí vẫn ra học viên đều — chi phí lại thấp. Điểm mấu chốt: phải có lời mời cụ thể (học thử miễn phí, kiểm tra trình độ) chứ không chỉ là tờ giấy giới thiệu chung chung.",
        ],
      },
      {
        heading: "6. Affiliate / cộng tác viên — kênh bị bỏ quên nhiều nhất",
        paragraphs: [
          "Mô hình rất đơn giản: mạng lưới cộng tác viên — thường chính là các phụ huynh, giáo viên, người có nhóm Zalo, Facebook cộng đồng — chia sẻ thông tin lớp học của bạn, và bạn chỉ trả hoa hồng khi có học viên đăng ký thật.",
          "Cái hay nằm ở chữ 'thật': không trả tiền cho lượt hiển thị hay cú click, chỉ trả cho kết quả. Rủi ro đốt ngân sách gần như bằng không. Đây chính là mô hình Affluence đang vận hành — và theo chúng tôi là kênh đáng thử nhất với trung tâm không có đội marketing riêng. Bài giải thích chi tiết về affiliate cho trường học có ngay trên blog này.",
        ],
      },
      {
        heading: "7. Data cũ — mỏ vàng đang phủ bụi",
        paragraphs: [
          "Danh sách phụ huynh từng hỏi mà chưa đăng ký, học viên cũ đã nghỉ, bé từng học thử... nằm im trong file Excel của hầu hết các trung tâm. Mỗi mùa tuyển sinh, một vòng gọi lại kèm ưu đãi quay lại thường ra vài học viên với chi phí gần bằng không. Trước khi đổ thêm tiền tìm người mới, hãy tận dụng hết những người đã từng biết đến mình.",
        ],
      },
      {
        heading: "Vậy chia ngân sách thế nào?",
        list: [
          "Giữ nền: chương trình giới thiệu có cơ chế rõ ràng + chăm data cũ — chi phí thấp nhất, làm trước tiên.",
          "Kênh chủ lực: chọn MỘT kênh trả phí làm thật tốt (Facebook hoặc Google tùy tệp khách) thay vì rải mỏng ba bốn kênh.",
          "Kênh không rủi ro: thêm affiliate/CTV vì chỉ trả khi có học viên thật — không ăn vào ngân sách cố định.",
          "Dài hạn: TikTok/nội dung nếu có nguồn lực, xác định 6 tháng mới thấy quả.",
          "Và quan trọng nhất: đo mỗi kênh ra bao nhiêu học viên thật mỗi tháng — không đo thì mọi quyết định chỉ là cảm giác.",
        ],
      },
    ],
  },
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
    slug: "chi-phi-marketing-giao-duc",
    title: "Chi phí marketing giáo dục: một học viên mới thực sự tốn bao nhiêu?",
    excerpt:
      "Nhiều trung tâm biết mình chi bao nhiêu cho quảng cáo, nhưng ít nơi trả lời được câu hỏi quan trọng hơn: mỗi học viên mới tốn bao nhiêu tiền để có được? Cách tính và các con số tham khảo.",
    category: "Dành cho trung tâm",
    date: "2026-07-16",
    readingTime: "7 phút đọc",
    gradient: "var(--grad-lime)",
    sections: [
      {
        paragraphs: [
          "Thử hỏi một chủ trung tâm: tháng rồi chi bao nhiêu cho marketing? Đa số trả lời được ngay. Hỏi tiếp: vậy mỗi học viên mới tốn bao nhiêu để có được? Không khí thường im lặng hẳn.",
          "Mà đó mới là con số quyết định trung tâm sống hay chật vật. Bài này hướng dẫn cách tính nó trong 15 phút, kèm vài khoảng tham khảo từ thực tế các chiến dịch chúng tôi vận hành.",
        ],
      },
      {
        heading: "CAC — con số một dòng nhưng nói lên tất cả",
        paragraphs: [
          "Chi phí sở hữu một học viên (Customer Acquisition Cost) tính rất đơn giản: lấy tổng chi marketing trong kỳ — tiền quảng cáo, hoa hồng, lương nhân sự marketing, chi phí sự kiện — chia cho số học viên mới đóng phí trong kỳ đó.",
          "Ví dụ: tháng 6 chi tổng cộng 30 triệu, có 15 học viên mới ghi danh. CAC = 2 triệu/học viên. Giờ đặt cạnh học phí: nếu một học viên đóng trung bình 2,5 triệu/tháng và học 6 tháng, doanh thu vòng đời là 15 triệu — chi 2 triệu để thu 15 triệu, ổn. Nhưng nếu học viên chỉ ở lại 2 tháng thì bức tranh khác hẳn.",
        ],
      },
      {
        heading: "Đừng nhầm chi phí mỗi lead với chi phí mỗi học viên",
        paragraphs: [
          "Đây là cái bẫy phổ biến nhất. Chạy quảng cáo ra lead giá 50–150 nghìn, nhìn có vẻ rẻ. Nhưng lead chỉ là số điện thoại. Từ 100 lead, gọi được 60, hẹn học thử được 20, đóng phí 5–8 người là kịch bản không hiếm — tức chi phí mỗi học viên thật cao gấp 15–20 lần chi phí mỗi lead.",
          "Quảng cáo báo cáo cho bạn giá lead. Sổ thu học phí mới nói thật giá học viên. Khoảng cách giữa hai con số đó chính là chất lượng vận hành của đội tư vấn — và là nơi tiền âm thầm biến mất nhiều nhất.",
        ],
      },
      {
        heading: "Vài khoảng tham khảo (đọc kèm muối)",
        paragraphs: [
          "Con số dao động mạnh theo khu vực, học phí và độ cạnh tranh, nên hãy xem đây là khung tham chiếu chứ không phải chuẩn:",
        ],
        list: [
          "Lead từ quảng cáo Facebook/Google cho tiếng Anh trẻ em: thường rơi khoảng 50–200 nghìn/lead tùy thành phố và mùa.",
          "Tỷ lệ lead → học viên đóng phí: 5–15% là phổ biến; đội tư vấn tốt có thể hơn.",
          "CAC qua kênh quảng cáo: thường rơi vào khoảng 1–4 triệu/học viên ở các thành phố lớn.",
          "CAC qua giới thiệu hoặc affiliate trả theo kết quả: thấp hơn đáng kể — vì chỉ trả khi có người thật.",
          "Nguyên tắc sức khỏe: doanh thu vòng đời của học viên nên gấp ít nhất 3 lần CAC.",
        ],
      },
      {
        heading: "Ba cách kéo CAC xuống mà không cắt ngân sách",
        list: [
          "Giữ chân tốt hơn: học viên ở lại thêm 2 tháng làm mọi phép tính đẹp lên ngay — và thường rẻ hơn nhiều so với tìm học viên mới.",
          "Siết khâu chăm lead: gọi trong 15 phút, nhắn lại sau 24 giờ, mời học thử có thời hạn. Tăng tỷ lệ chốt từ 8% lên 12% tương đương giảm 1/3 CAC.",
          "Chuyển một phần ngân sách sang kênh trả theo kết quả: hoa hồng chỉ mất khi có học viên đăng ký thật, nên CAC được 'khóa' từ trước — không còn tháng đốt tiền mà về tay không.",
        ],
      },
      {
        heading: "Bắt đầu từ đâu tối nay?",
        paragraphs: [
          "Mở file thu học phí 3 tháng gần nhất, đếm học viên mới. Cộng mọi khoản chi marketing cùng kỳ. Chia. Một phép tính, một con số — nhưng từ nay mọi quyết định ngân sách của bạn có gốc để bám, và bạn sẽ nhìn các báo cáo quảng cáo bằng con mắt khác hẳn.",
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
    slug: "affiliate-marketing-cho-truong-hoc",
    title: "Affiliate marketing cho trường học là gì? Giải thích không cần thuật ngữ",
    excerpt:
      "Trả tiền quảng cáo thì mất trước được sau, còn affiliate thì ngược lại: chỉ trả khi có học viên đăng ký thật. Bài viết giải thích mô hình này bằng ngôn ngữ đời thường, kèm luôn mặt trái của nó.",
    category: "Dành cho trung tâm",
    date: "2026-07-10",
    readingTime: "6 phút đọc",
    gradient: "var(--grad-brand)",
    sections: [
      {
        paragraphs: [
          "Hãy tưởng tượng chị Hoa — một phụ huynh có nhóm Zalo 500 thành viên toàn bố mẹ cùng trường. Con chị học ở trung tâm của bạn và tiến bộ thật. Một hôm có người trong nhóm hỏi chỗ học tiếng Anh, chị giới thiệu trung tâm bạn, kèm đường link đăng ký. Ba gia đình cho con vào học.",
          "Giờ thêm một bước: bạn gửi chị Hoa một khoản hoa hồng cho mỗi bé đăng ký thành công. Xin chúc mừng — bạn vừa hiểu xong affiliate marketing. Toàn bộ phần còn lại của mô hình chỉ là công cụ để làm việc đó ở quy mô hàng trăm 'chị Hoa' cùng lúc.",
        ],
      },
      {
        heading: "Khác gì chạy quảng cáo?",
        paragraphs: [
          "Khác nhau ở chỗ ai chịu rủi ro. Chạy quảng cáo là trả tiền trước — cho lượt hiển thị, cú click, số điện thoại — rồi hy vọng trong đó có học viên thật. Tháng nào quảng cáo kém, tiền vẫn mất.",
          "Affiliate đảo ngược trật tự đó: cộng tác viên chia sẻ lớp học của bạn trước, phụ huynh đăng ký thật rồi bạn mới trả hoa hồng. Không có học viên, không mất đồng nào. Về bản chất, bạn chuyển từ 'mua sự chú ý' sang 'mua kết quả'.",
          "Còn một điểm ăn tiền nữa ít người để ý: lời giới thiệu đến từ người quen — cô giáo, phụ huynh cùng lớp, người có uy tín trong nhóm cộng đồng — vốn dĩ đáng tin hơn mọi banner quảng cáo. Kênh này thừa hưởng sức mạnh của truyền miệng, nhưng có hệ thống và đo đếm được.",
        ],
      },
      {
        heading: "Vận hành thực tế trông như thế nào?",
        list: [
          "Trung tâm đăng thông tin lớp cần tuyển: tên lớp, độ tuổi, khu vực, mức hoa hồng mỗi học viên.",
          "Cộng tác viên trong mạng lưới chọn lớp phù hợp với cộng đồng của mình, nhận link riêng.",
          "Họ chia sẻ link vào nhóm Zalo, Facebook, hoặc gửi trực tiếp người đang cần.",
          "Phụ huynh đăng ký qua link → hệ thống xác minh đăng ký thật (gọi xác nhận, lọc trùng, lọc ảo).",
          "Trung tâm nhận danh sách học viên đã xác minh và trả hoa hồng theo kết quả — thường đối soát theo tuần.",
        ],
      },
      {
        heading: "Nói thẳng về mặt trái",
        paragraphs: [
          "Không có kênh nào hoàn hảo, và affiliate có hai rủi ro cần biết trước. Một là chất lượng mạng lưới: cộng tác viên kém có thể spam link vô tội vạ, ảnh hưởng hình ảnh trung tâm. Hai là gian lận: đăng ký ảo để ăn hoa hồng — chuyện có thật trong ngành.",
          "Cả hai đều xử được bằng vận hành tử tế: tuyển chọn cộng tác viên, quy tắc chia sẻ rõ ràng, và quan trọng nhất là khâu xác minh từng đăng ký trước khi tính hoa hồng. Đây cũng chính là phần việc nặng nhất — và là lý do các trung tâm thường hợp tác với một mạng lưới có sẵn hệ thống thay vì tự xây từ đầu. Tự xây được không? Được, nếu bạn có người quản lý riêng; còn không, chi phí vận hành sẽ ăn hết phần tiết kiệm.",
        ],
      },
      {
        heading: "Kênh này hợp với ai?",
        paragraphs: [
          "Hợp nhất với trung tâm đã dạy tốt nhưng yếu khâu marketing — sản phẩm ổn, chỉ thiếu người biết đến. Cũng hợp với nơi ngân sách mỏng, không chịu nổi vài chục triệu tiền quảng cáo 'đặt cược' mỗi tháng.",
          "Ngược lại, nếu chất lượng lớp học còn lung lay thì khoan — affiliate khuếch đại lời truyền miệng, mà truyền miệng thì lan cả tiếng tốt lẫn tiếng xấu.",
        ],
      },
      {
        heading: "Tóm lại",
        paragraphs: [
          "Affiliate marketing cho giáo dục = chương trình giới thiệu có hệ thống, trả tiền theo học viên thật. Ưu điểm lớn nhất: rủi ro ngân sách gần như bằng không. Việc khó nhất: xác minh và vận hành mạng lưới. Nếu bạn muốn xem mô hình này chạy thực tế ra sao với trung tâm của mình, Affluence luôn sẵn sàng demo — đăng lớp miễn phí, có học viên thật mới tính phí.",
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
    slug: "quang-cao-facebook-khong-ra-hoc-vien",
    title: "Đổ tiền vào quảng cáo Facebook mà không ra học viên? 6 lý do thường gặp",
    excerpt:
      "Ads vẫn chạy, lead vẫn về, mà lớp vẫn trống. Trước khi kết luận 'Facebook hết thời', hãy soi 6 chỗ rò rỉ này — phần lớn không nằm ở quảng cáo, mà ở những gì diễn ra sau cú click.",
    category: "Dành cho trung tâm",
    date: "2026-07-03",
    readingTime: "7 phút đọc",
    gradient: "var(--grad-sky)",
    sections: [
      {
        paragraphs: [
          "\"Bên em chạy ads tháng 20 triệu mà chẳng được mấy học viên\" — câu than quen thuộc đến mức chúng tôi nghe gần như mỗi tuần. Điều thú vị là khi ngồi soi từng khâu, thủ phạm hiếm khi là 'Facebook hết thời'. Tiền thường rò rỉ ở sáu chỗ rất cụ thể dưới đây, và đa số sửa được mà không cần tăng ngân sách.",
        ],
      },
      {
        heading: "1. Gọi lead quá chậm",
        paragraphs: [
          "Đây là thủ phạm số một, không có đối thủ. Phụ huynh điền form lúc 8 giờ tối khi đang phân vân giữa ba trung tâm — nơi nào gọi lại trong 15 phút chiếm ưu thế tuyệt đối, còn để đến trưa mai thì họ đã đăng ký học thử chỗ khác. Lead nguội nhanh hơn cà phê. Nếu chỉ được sửa một thứ sau bài này, hãy sửa tốc độ gọi lead.",
        ],
      },
      {
        heading: "2. Quảng cáo hứa một đằng, tư vấn nói một nẻo",
        paragraphs: [
          "Ads giật 'học phí chỉ 999k' nhưng gọi điện mới biết đó là giá 1 tuần trải nghiệm; ảnh lớp 8 bé nhưng thực tế 20 bé. Phụ huynh không ngu — họ cảm nhận được độ vênh ngay, và niềm tin mất từ cuộc gọi đầu tiên. Quảng cáo tốt nhất là quảng cáo mà đội tư vấn có thể xác nhận từng chữ.",
        ],
      },
      {
        heading: "3. Nhắm sai người ngay từ đầu",
        paragraphs: [
          "Target 'phụ huynh có con 5–10 tuổi' nghe hợp lý, nhưng nếu trung tâm của bạn ở Tân Bình mà quảng cáo phủ cả thành phố thì một nửa ngân sách đang mua những cú click không bao giờ thành học viên — không ai chở con 15km đi học tiếng Anh tuần ba buổi. Với mô hình trung tâm vật lý, bán kính 3–5km quanh cơ sở là vùng vàng; ngoài vùng đó, mỗi đồng chi ra loãng dần theo cây số.",
        ],
      },
      {
        heading: "4. Một mẫu quảng cáo chạy từ mùa này sang mùa khác",
        paragraphs: [
          "Mẫu ads dù hay đến đâu cũng 'mòn': cùng một tệp người xem thấy nó lần thứ mười thì chi phí mỗi lead cứ thế leo thang. Dấu hiệu nhận biết rất dễ — CPL tháng này cao hơn hẳn tháng trước dù không đổi gì. Thuốc chữa: luôn có 2–3 mẫu chạy song song, thay mẫu yếu mỗi 2–4 tuần, và ưu tiên video thật từ lớp học — chân thật thắng trau chuốt trong ngành này.",
        ],
      },
      {
        heading: "5. Đo bằng chỉ số đẹp thay vì chỉ số thật",
        paragraphs: [
          "Reach, impression, like — các con số này làm báo cáo đẹp nhưng không đóng học phí. Chuỗi số duy nhất đáng theo dõi: chi bao nhiêu → bao nhiêu lead → bao nhiêu đến học thử → bao nhiêu đóng phí. Agency nào báo cáo cho bạn bằng like và reach mà né con số học viên thật, hãy hỏi lại cho ra nhẽ.",
        ],
      },
      {
        heading: "6. Đặt cược toàn bộ vào một kênh",
        paragraphs: [
          "Khi 100% học viên mới đến từ Facebook, bạn không có kế hoạch B: một lần tài khoản quảng cáo bị khóa, một đợt giá thầu tăng, là tuyển sinh đứng hình. Các trung tâm khỏe thường đứng trên ba chân: một kênh trả phí, một dòng giới thiệu có cơ chế, và một kênh trả theo kết quả (affiliate) làm lưới an toàn — kênh cuối này hay ở chỗ không ra học viên thì cũng không mất tiền.",
        ],
      },
      {
        heading: "Checklist rà nhanh trước khi đổ thêm tiền",
        list: [
          "Lead được gọi trong bao lâu? (chuẩn: dưới 15 phút)",
          "Nội dung ads có khớp 100% những gì tư vấn viên nói không?",
          "Ngân sách có đang tập trung trong bán kính 3–5km quanh cơ sở?",
          "Có ít nhất 2 mẫu quảng cáo đang chạy song song không?",
          "Bạn có biết chính xác tháng rồi Facebook mang về bao nhiêu học viên đóng phí — không phải bao nhiêu lead?",
          "Nếu Facebook sập ngày mai, học viên mới đến từ đâu?",
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
    slug: "5-con-so-do-luong-tuyen-sinh",
    title: "5 con số chủ trung tâm nên nhìn mỗi tuần (mất đúng 30 phút)",
    excerpt:
      "Không cần dashboard xịn hay nhân sự data. Một file Excel với 5 cột, cập nhật sáng thứ Hai hằng tuần, đủ để bạn biết trung tâm đang khỏe hay đang rò tiền — và rò ở đâu.",
    category: "Dành cho trung tâm",
    date: "2026-06-25",
    readingTime: "6 phút đọc",
    gradient: "var(--grad-mint)",
    sections: [
      {
        paragraphs: [
          "Phần lớn chủ trung tâm điều hành bằng cảm giác: tháng này 'có vẻ đông', quý này 'hình như chậm'. Cảm giác không sai, nhưng nó luôn đến trễ — khi bạn cảm nhận được lớp vắng thì vấn đề đã âm ỉ hai ba tháng trước đó rồi.",
          "Tin tốt: chỉ cần 5 con số, cập nhật mỗi sáng thứ Hai, là bạn đi trước cảm giác của chính mình một quý. Không cần phần mềm gì ngoài Excel.",
        ],
      },
      {
        heading: "1. Số lead mới trong tuần",
        paragraphs: [
          "Đếm tất cả: form quảng cáo, tin nhắn fanpage, cuộc gọi hỏi thăm, người ghé trực tiếp, giới thiệu. Đây là 'nhiệt kế' đầu phễu — nó tụt hai tuần liên tiếp là chuông báo sớm nhất bạn có, trước khi doanh thu kịp phản ánh bất cứ điều gì.",
        ],
      },
      {
        heading: "2. Tỷ lệ lead → học thử",
        paragraphs: [
          "Trong số người hỏi, bao nhiêu phần trăm đặt lịch học thử? Con số này đo chất lượng hai thứ cùng lúc: lead có thật không, và đội tư vấn có làm tốt không. Nó thấp bất thường thì một trong hai khâu đó có vấn đề — và cả hai đều sửa được trong tuần, không cần chờ hết quý.",
        ],
      },
      {
        heading: "3. Tỷ lệ học thử → đóng phí",
        paragraphs: [
          "Con số trung thực nhất về sản phẩm của bạn. Phụ huynh đã dắt con đến tận nơi, ngồi xem tận mắt — họ không đóng phí nghĩa là buổi học thử chưa đủ thuyết phục: giáo viên chưa 'ghi điểm', lớp chưa đúng kỳ vọng, hay khâu chốt sau buổi học bị bỏ lửng. Tỷ lệ này mà dưới 30% thì nên dừng đổ thêm tiền quảng cáo và sửa buổi học thử trước — không có gì lãng phí bằng kéo người đến rồi để họ đi.",
        ],
      },
      {
        heading: "4. Chi phí cho mỗi học viên mới (CAC)",
        paragraphs: [
          "Tổng chi marketing tuần/tháng chia cho số học viên mới đóng phí. Đặt cạnh học phí trung bình để biết mỗi học viên mới bao lâu thì 'hòa vốn'. Cách tính chi tiết và các khoảng tham khảo có trong bài riêng về chi phí marketing giáo dục trên blog này.",
        ],
      },
      {
        heading: "5. Số học viên nghỉ trong tuần",
        paragraphs: [
          "Con số bị né nhiều nhất — chẳng ai thích đếm người rời đi. Nhưng giữ chân rẻ hơn tuyển mới nhiều lần: một học viên nghỉ sớm không chỉ mất doanh thu các tháng sau mà còn mang theo cả những lời giới thiệu lẽ ra sẽ có. Đếm số nghỉ, và quan trọng hơn: gọi hỏi lý do từng trường hợp. Ba cuộc gọi như vậy dạy bạn nhiều hơn mọi bản khảo sát.",
        ],
      },
      {
        heading: "Cách vận hành cho nhẹ nhàng",
        list: [
          "Một file Excel, 5 cột, mỗi tuần một dòng. Ai trong đội cũng điền được, mất 30 phút sáng thứ Hai.",
          "Nhìn xu hướng 4 tuần, đừng phản ứng với từng tuần lẻ — một tuần xấu là nhiễu, bốn tuần xấu là tín hiệu.",
          "Mỗi tuần chỉ chọn MỘT con số tệ nhất để sửa. Sửa tràn lan thì không sửa được gì.",
          "Sau 3 tháng, bạn sẽ có thứ quý hơn mọi lời khuyên: đường cơ sở của chính trung tâm mình để tự so sánh.",
        ],
      },
      {
        heading: "Lời cuối",
        paragraphs: [
          "Quản trị bằng số không làm mất đi 'cái hồn' của nghề giáo dục — nó chỉ đảm bảo nơi dạy tốt không chết vì vận hành. Và nếu bạn muốn cả phần tuyển sinh cũng chạy theo đúng tinh thần đo đếm được này — trả tiền theo học viên thật thay vì theo lời hứa — thì đó chính xác là mô hình Affluence được sinh ra để làm.",
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
