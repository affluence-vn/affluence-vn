import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  Target,
  Handshake,
  BarChart3,
  ShieldCheck,
  Rocket,
  Heart,
  Mail,
  Linkedin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: AboutPage,
});

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
};

const team: TeamMember[] = [
  {
    name: "Nguyễn Minh Anh",
    role: "Nhà sáng lập & CEO",
    bio: "10+ năm kinh nghiệm performance marketing trong lĩnh vực giáo dục. Từng dẫn dắt tăng trưởng cho các thương hiệu EdTech hàng đầu.",
    initials: "MA",
    gradient: "var(--grad-brand)",
  },
  {
    name: "Trần Hải Đăng",
    role: "Giám đốc Chiến lược",
    bio: "Chuyên gia affiliate & xây dựng mạng lưới publisher. Kết nối hơn 500 đối tác trên toàn quốc.",
    initials: "HĐ",
    gradient: "var(--grad-sunrise)",
  },
  {
    name: "Lê Thu Phương",
    role: "Trưởng phòng Đối tác Giáo dục",
    bio: "Đồng hành cùng 200+ trường học, trung tâm ngoại ngữ và học viện trong việc mở rộng tuyển sinh.",
    initials: "TP",
    gradient: "var(--grad-mint)",
  },
  {
    name: "Phạm Quốc Bảo",
    role: "Giám đốc Sản phẩm",
    bio: "Xây dựng nền tảng theo dõi hiệu quả, chống gian lận và tối ưu chuyển đổi cho hệ sinh thái Affluence.",
    initials: "QB",
    gradient: "var(--grad-sky)",
  },
  {
    name: "Đỗ Khánh Linh",
    role: "Trưởng phòng Sáng tạo",
    bio: "Thiết kế trải nghiệm nội dung và creative campaigns cho các chiến dịch tuyển sinh trọng điểm.",
    initials: "KL",
    gradient: "var(--grad-peach)",
  },
  {
    name: "Vũ Anh Tuấn",
    role: "Trưởng phòng Dữ liệu",
    bio: "Biến dữ liệu chuyển đổi thành insight, giúp đối tác ra quyết định ngân sách chính xác từng đồng.",
    initials: "AT",
    gradient: "var(--grad-lime)",
  },
];

const values = [
  {
    icon: Target,
    title: "Hiệu quả đo được",
    text: "Mỗi chiến dịch được đo bằng học viên thật, hợp đồng thật — không phải lượt hiển thị.",
  },
  {
    icon: ShieldCheck,
    title: "Minh bạch tuyệt đối",
    text: "Đối tác nhìn thấy toàn bộ chuyển đổi, hoa hồng và hiệu suất theo thời gian thực.",
  },
  {
    icon: Heart,
    title: "Đồng hành dài hạn",
    text: "Chúng tôi phát triển cùng trường học và publisher — không phải chạy chiến dịch rồi biến mất.",
  },
];

const stats = [
  { value: "500+", label: "Đối tác publisher" },
  { value: "200+", label: "Trường & trung tâm" },
  { value: "1.2M+", label: "Học viên tiếp cận" },
  { value: "98%", label: "Đối tác gia hạn" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Nav />
      <Hero />
      <StatsBar />
      <Mission />
      <WhatWeDo />
      <Team />
      <Values />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-7 w-7 place-items-center rounded-lg bg-grad-brand shadow-lift">
        <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-[17px] font-extrabold tracking-tight">Affluence</span>
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[62px] max-w-6xl items-center justify-between px-6">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          <a href="#su-menh" className="text-[13px] font-semibold text-ink-soft hover:text-ink">
            Sứ mệnh
          </a>
          <a href="#hoat-dong" className="text-[13px] font-semibold text-ink-soft hover:text-ink">
            Chúng tôi làm gì
          </a>
          <a href="#team" className="text-[13px] font-semibold text-ink-soft hover:text-ink">
            Đội ngũ
          </a>
          <a href="#lien-he" className="text-[13px] font-semibold text-ink-soft hover:text-ink">
            Liên hệ
          </a>
        </div>
        <a
          href="#lien-he"
          className="inline-flex items-center gap-1.5 rounded-full bg-grad-brand px-5 py-2 text-[13px] font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5"
        >
          Hợp tác ngay
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 md:pt-28 md:pb-32">
      {/* animated blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-blob absolute -top-32 -left-24 h-[380px] w-[380px] rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--grad-sunrise)" }}
        />
        <div
          className="animate-blob absolute top-10 -right-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--grad-sky)", animationDelay: "3s" }}
        />
        <div
          className="animate-blob absolute -bottom-40 left-1/3 h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--grad-lime)", animationDelay: "6s" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-subtle px-4 py-1.5 text-[12px] font-bold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Về Affluence · Agency marketing giáo dục
        </span>
        <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-tight md:text-[64px]">
          Chúng tôi kết nối{" "}
          <span className="text-gradient-brand">giáo dục</span> với{" "}
          <span className="text-gradient-brand">tăng trưởng</span> thật.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-ink-soft">
          Affluence là agency performance marketing chuyên biệt cho ngành giáo dục — kết nối
          trường học, trung tâm với hệ sinh thái publisher và mạng lưới affiliate hàng đầu Việt
          Nam. Chúng tôi giúp bạn tuyển sinh hiệu quả, minh bạch và bền vững.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#team"
            className="inline-flex items-center gap-2 rounded-full bg-grad-brand px-7 py-3.5 text-sm font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Gặp đội ngũ của chúng tôi
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#hoat-dong"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-secondary"
          >
            Chúng tôi làm gì
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="border-y border-border bg-white/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-[32px] font-extrabold tracking-tight text-gradient-brand md:text-[40px]">
              {s.value}
            </div>
            <div className="mt-1 text-[13px] font-semibold text-ink-soft">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="su-menh" className="py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            Sứ mệnh
          </p>
          <h2 className="text-[34px] font-bold leading-[1.15] tracking-tight md:text-[44px]">
            Mỗi học viên xứng đáng được tìm thấy trường phù hợp.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.8] text-ink-soft">
            Chúng tôi tin rằng giáo dục là ngành xứng đáng có công cụ marketing tốt nhất — không
            phải quảng cáo tràn lan, không phải lead ảo. Affluence xây dựng cầu nối minh bạch giữa
            trường học và mạng lưới publisher, để mỗi đồng ngân sách đều tạo ra một học viên
            thật.
          </p>
          <p className="mt-4 text-[16px] leading-[1.8] text-ink-soft">
            Từ một trung tâm ngoại ngữ ở Hà Nội đến chuỗi trường quốc tế toàn quốc — chúng tôi
            đồng hành với bạn ở mọi giai đoạn tăng trưởng.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -m-4 rounded-3xl bg-grad-brand opacity-10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-lift">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, label: "Trường học", grad: "var(--grad-brand)" },
                { icon: Handshake, label: "Publisher", grad: "var(--grad-sunrise)" },
                { icon: BarChart3, label: "Chuyển đổi thật", grad: "var(--grad-mint)" },
                { icon: ShieldCheck, label: "Minh bạch", grad: "var(--grad-sky)" },
              ].map(({ icon: Icon, label, grad }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-secondary/50 p-5"
                >
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl shadow-lift"
                    style={{ background: grad }}
                  >
                    <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                  </div>
                  <div className="mt-4 text-[15px] font-bold text-ink">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const items = [
    {
      icon: GraduationCap,
      title: "Kết nối trường & trung tâm",
      text: "Chúng tôi làm việc trực tiếp với các đơn vị giáo dục để hiểu chương trình, đối tượng học viên và mục tiêu tuyển sinh.",
      grad: "var(--grad-brand)",
    },
    {
      icon: Handshake,
      title: "Mở rộng mạng lưới publisher",
      text: "Từ KOLs giáo dục, blog phụ huynh đến các trang review — chúng tôi tuyển chọn publisher phù hợp cho từng chiến dịch.",
      grad: "var(--grad-sunrise)",
    },
    {
      icon: Rocket,
      title: "Vận hành chiến dịch affiliate",
      text: "Thiết lập tracking, creative, hoa hồng và tối ưu liên tục — bạn chỉ trả tiền khi có học viên thật đăng ký.",
      grad: "var(--grad-mint)",
    },
    {
      icon: BarChart3,
      title: "Báo cáo & tối ưu bằng dữ liệu",
      text: "Dashboard thời gian thực, phân tích cohort, và đề xuất tối ưu dựa trên hành vi chuyển đổi thực tế.",
      grad: "var(--grad-sky)",
    },
  ];

  return (
    <section id="hoat-dong" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            Chúng tôi làm gì
          </p>
          <h2 className="text-[34px] font-bold leading-[1.15] tracking-tight md:text-[42px]">
            Một nền tảng, hai phía cùng thắng.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-ink-soft">
            Affluence là cây cầu chuyên biệt giữa nhà giáo dục và người có khả năng đưa học viên
            đến với họ.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map(({ icon: Icon, title, text, grad }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-xl shadow-lift transition-transform group-hover:scale-105"
                style={{ background: grad }}
              >
                <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-[19px] font-bold tracking-tight">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            Đội ngũ
          </p>
          <h2 className="text-[34px] font-bold leading-[1.15] tracking-tight md:text-[44px]">
            Những người xây <span className="text-gradient-brand">Affluence</span>.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-ink-soft">
            Chúng tôi là đội ngũ đến từ EdTech, performance marketing và affiliate — cùng chung
            một niềm tin: giáo dục xứng đáng có công cụ tăng trưởng tử tế.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center gap-4">
                <div
                  className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl font-display text-[22px] font-extrabold text-white shadow-lift"
                  style={{ background: m.gradient }}
                >
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-[17px] font-bold tracking-tight">{m.name}</h3>
                  <p className="mt-0.5 text-[13px] font-semibold text-primary">{m.role}</p>
                </div>
              </div>
              <p className="mt-5 text-[14.5px] leading-[1.7] text-ink-soft">{m.bio}</p>
              <div className="mt-5 flex gap-2 border-t border-border pt-4">
                <button
                  type="button"
                  aria-label={`Email ${m.name}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary-subtle hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label={`LinkedIn ${m.name}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary-subtle hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            Giá trị cốt lõi
          </p>
          <h2 className="text-[34px] font-bold leading-[1.15] tracking-tight md:text-[42px]">
            Ba nguyên tắc, không thoả hiệp.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-secondary/40 p-8 text-center"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-grad-brand shadow-lift">
                <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-[19px] font-bold tracking-tight">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="lien-he" className="px-6 py-24 md:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-grad-brand p-10 shadow-glow md:p-16">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[42px]">
              Cùng Affluence xây dựng chiến dịch tuyển sinh tiếp theo của bạn.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-white/85">
              Dù bạn là trường học, trung tâm giáo dục, publisher hay mạng lưới affiliate — chúng
              tôi luôn sẵn sàng lắng nghe.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="mailto:hello@affluence.vn"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-lift transition-transform hover:-translate-y-0.5"
            >
              hello@affluence.vn
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+84900000000"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Đặt lịch tư vấn miễn phí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <Logo />
          <p className="mt-3 max-w-md text-[13px] text-ink-soft">
            Agency performance marketing chuyên biệt cho ngành giáo dục Việt Nam.
          </p>
        </div>
        <div className="text-[13px] text-ink-mute">
          © {new Date().getFullYear()} Affluence. Bản quyền thuộc về Affluence Vietnam.
        </div>
      </div>
    </footer>
  );
}
