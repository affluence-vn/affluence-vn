import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  Target,
  Handshake,
  BarChart3,
  ShieldCheck,
  Heart,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Users,
  Check,
} from "lucide-react";
import howWorksSchool from "../assets/howworks-0.jpg";
import howWorksPartner from "../assets/howworks-1.jpg";
import logoMark from "../assets/logo-mark.png";
import vuongPhoto from "../assets/vuong.png.asset.json";
import { FloatingContact, TelegramIcon, ZaloIcon } from "../components/FloatingContact";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: logoMark, fetchpriority: "high" },
    ],
  }),
  component: AboutPage,
});


type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  photo?: string;
  email?: string;
  linkedin?: string;
  phone?: string;
};

const team: TeamMember[] = [
  {
    name: "Nguyễn Minh Vương",
    role: "Founder",
    bio: "Ex-Shopify, VP tại Spiraledge Inc. Hơn 10 năm kinh nghiệm xây dựng và mở rộng doanh nghiệp thương mại điện tử & marketing hiệu quả.",
    initials: "MV",
    gradient: "var(--grad-brand)",
    photo: vuongPhoto.url,
    email: "nuyenaffluence.md@gmail.com",
    linkedin: "https://www.linkedin.com/in/vuongnm/",
  },

  {
    name: "Nguyễn Thị Tú Uyên",
    role: "Trưởng phòng Affiliate",
    bio: "Quản lý affiliate dày dặn kinh nghiệm, chuyên xây dựng và vận hành mạng lưới publisher mang lại chuyển đổi thật cho đối tác giáo dục.",
    initials: "TU",
    gradient: "var(--grad-sunrise)",
    linkedin: "https://www.linkedin.com/in/uyen-nguyen-2bb2b2420/",
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

function AboutPage() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Nav />
      <Hero />
      <Mission />
      <WhatWeDo />
      <Team />
      <Values />
      <CTA />
      <Location />
      <Footer />
      <FloatingContact />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logoMark}
        alt="Affluence logo"
        width={28}
        height={28}
        fetchPriority="high"
        decoding="async"
        className="h-7 w-7 object-contain"
      />

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
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = blobsRef.current;
    if (!el) return;
    const blobs = Array.from(el.querySelectorAll<HTMLElement>("[data-speed]"));
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      const y = window.scrollY;
      blobs.forEach((blob) => {
        const speed = Number(blob.dataset.speed ?? 0);
        const dir = Number(blob.dataset.dir ?? 1);
        const phase = Number(blob.dataset.phase ?? 0);
        const ty = y * speed + Math.sin(t * 0.6 + phase) * 40;
        const tx = Math.cos(t * 0.5 + phase) * 90 * dir + Math.sin(y * 0.003) * 60 * dir;
        const rot = y * 0.05 * dir + t * 6 * dir;
        const scale = 1 + Math.sin(t * 0.4 + phase) * 0.08 + Math.min(y / 3000, 0.25);
        blob.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(${scale})`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);


  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 md:pt-28 md:pb-32">
      {/* animated blobs — parallax with scroll */}
      <div ref={blobsRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        <div data-speed="0.35" data-dir="1" data-phase="0" className="absolute -top-32 -left-24 will-change-transform">
          <div
            className="h-[380px] w-[380px] rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--grad-sunrise)" }}
          />
        </div>
        <div data-speed="0.6" data-dir="-1" data-phase="2" className="absolute top-10 -right-32 will-change-transform">
          <div
            className="h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--grad-sky)" }}
          />
        </div>
        <div data-speed="0.5" data-dir="1" data-phase="4" className="absolute -bottom-40 left-1/3 will-change-transform">
          <div
            className="h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--grad-lime)" }}
          />
        </div>

      </div>


      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-tight md:text-[64px]">
          Chúng tôi kết nối{" "}
          <span className="text-gradient-brand">giáo dục</span> với{" "}
          <span className="text-gradient-brand">tăng trưởng</span> thật.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-ink-soft">
          Affluence là agency performance marketing chuyên sâu trong lĩnh vực giáo dục — kết nối
          trường học, trung tâm với hệ sinh thái publisher và mạng lưới affiliate rộng khắp Việt
          Nam. Tuyển sinh hiệu quả. Chi phí tối ưu. Đồng hành tăng trưởng.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#lien-he"
            className="inline-flex items-center gap-2 rounded-full bg-grad-brand px-7 py-3.5 text-sm font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Nhận tư vấn ngay
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
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
  const schoolFeatures = [
    {
      title: "Đăng lớp trong 5 phút",
      text: "Tên lớp, hoa hồng mỗi học viên, thành phố mục tiêu. Không cần website, không cần kỹ thuật.",
    },
    {
      title: "Cộng tác viên địa phương lan rộng",
      text: "Mạng lưới cộng tác viên chia sẻ lớp của bạn đến đúng người đang cần.",
    },
    {
      title: "Chỉ trả khi có học viên thật",
      text: "Mỗi đăng ký được xác minh. Bạn trả hoa hồng sau khi có người thật đăng ký — không cần thanh toán trước.",
    },
  ];

  const partnerFeatures = [
    {
      title: "Chọn lớp phù hợp audience",
      text: "Xem lớp đang tuyển sinh, hoa hồng và khu vực. Không cần đăng ký để xem trước.",
    },
    {
      title: "Lấy link riêng trong vài giây",
      text: "Một click là có link cá nhân. Dán vào Zalo, Facebook, nhóm phụ huynh — bất cứ đâu.",
    },
    {
      title: "Thanh toán hàng tuần",
      text: "Hoa hồng cộng ngay khi đăng ký xác nhận. Thanh toán ra hàng tuần — không chờ cuối tháng.",
    },
  ];

  return (
    <section id="hoat-dong" className="bg-page py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            Cách hoạt động
          </p>
          <h2 className="text-[34px] font-bold leading-[1.15] tracking-tight md:text-[42px]">
            Hai bên, cùng có lợi.
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {/* Trường / trung tâm — ảnh trái, nội dung phải */}
          <div className="grid overflow-hidden rounded-2xl border border-border bg-white md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div
              className="relative flex min-h-[220px] items-center justify-center md:min-h-[300px]"
              style={{ background: "linear-gradient(135deg,#EEF2FF 0%,#ffffff 100%)" }}
            >
              <img
                src={howWorksSchool}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 text-[13px] font-bold text-primary">
                <GraduationCap className="h-4 w-4" />
                Dành cho trường / trung tâm
              </span>
            </div>
            <div className="p-8 md:py-9 md:pl-2 md:pr-10">
              <h3 className="text-[22px] font-extrabold tracking-tight">
                Đăng lớp, để mạng lưới lấp đầy
              </h3>
              <div className="mt-5 grid gap-4">
                {schoolFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100">
                      <Check className="h-3 w-3 text-emerald-600" strokeWidth={3.5} />
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-ink">{f.title}</p>
                      <p className="mt-0.5 text-[13px] leading-[1.6] text-ink-soft">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#lien-he"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary transition-colors hover:text-primary-hover"
              >
                Đăng lớp miễn phí
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Cộng tác viên — nội dung trái, ảnh phải */}
          <div className="grid overflow-hidden rounded-2xl border border-border bg-white md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div className="order-2 p-8 md:order-1 md:py-9 md:pl-10 md:pr-2">
              <h3 className="text-[22px] font-extrabold tracking-tight">
                Chia sẻ link, hoa hồng tự về
              </h3>
              <div className="mt-5 grid gap-4">
                {partnerFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100">
                      <Check className="h-3 w-3 text-emerald-600" strokeWidth={3.5} />
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-ink">{f.title}</p>
                      <p className="mt-0.5 text-[13px] leading-[1.6] text-ink-soft">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#lien-he"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-emerald-600 transition-colors hover:text-emerald-700"
              >
                Trở thành cộng tác viên
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div
              className="relative order-1 flex min-h-[220px] items-center justify-center md:order-2 md:min-h-[300px]"
              style={{ background: "linear-gradient(135deg,#D1FAE5 0%,#ffffff 100%)" }}
            >
              <img
                src={howWorksPartner}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <span className="relative inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-1.5 text-[13px] font-bold text-emerald-700">
                <Users className="h-4 w-4" />
                Dành cho cộng tác viên
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {team.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center gap-4">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-lift"
                  />
                ) : (
                  <div
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl font-display text-[22px] font-extrabold text-white shadow-lift"
                    style={{ background: m.gradient }}
                  >
                    {m.initials}
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="truncate text-[17px] font-bold tracking-tight">{m.name}</h3>
                  <p className="mt-0.5 text-[13px] font-semibold text-primary">{m.role}</p>
                </div>
              </div>
              <p className="mt-5 text-[14.5px] leading-[1.7] text-ink-soft">{m.bio}</p>
              <div className="mt-5 flex gap-2 border-t border-border pt-4">
                {m.phone && (
                  <a
                    href={`tel:+84${m.phone.replace(/\D/g, "").replace(/^0/, "")}`}
                    aria-label={`Điện thoại ${m.name}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary-subtle hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                )}
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    aria-label={`Email ${m.name}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary-subtle hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                )}
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn ${m.name}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary-subtle hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
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
    <section id="lien-he" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-grad-brand p-6 shadow-glow sm:p-10 md:rounded-[32px] md:p-16">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <h2 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[32px] md:text-[42px]">
              Cùng Affluence xây dựng chiến dịch tuyển sinh tiếp theo của bạn.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-white/85 sm:text-[16px]">
              Dù bạn là trường học, trung tâm giáo dục, publisher hay mạng lưới affiliate — chúng tôi luôn sẵn sàng lắng nghe và kết nối để cùng phát triển.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 md:justify-end">
            <a
              href="mailto:nuyenaffluence.md@gmail.com"
              aria-label="Email Affluence"
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-primary shadow-lift transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+84869688153"
              aria-label="Gọi điện Affluence"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vuongnm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Affluence"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}

function Location() {
  const address = "166/2D Đ. Trần Văn Dư, Tân Bình, Hồ Chí Minh 70000, Vietnam";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="vi-tri" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-stretch">
          <div className="flex flex-col justify-center rounded-3xl border border-border bg-secondary/40 p-8">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-grad-brand shadow-lift">
                <MapPin className="h-5 w-5 text-white" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-[18px] font-bold tracking-tight">Văn phòng Affluence</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.7] text-ink-soft">{address}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 border-t border-border pt-6">
              <a
                href="tel:+84869688153"
                className="mt-2.5 block text-[14px] font-semibold text-ink-soft transition-colors hover:text-primary"
              >
                Hotline: 0869 688 153 (08:00 – 17:30, hằng ngày)
              </a>
              <a
                href="https://zalo.me/0868688153"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 block text-[14px] font-semibold text-ink-soft transition-colors hover:text-primary"
              >
                Zalo: 0868 688 153 (Hỗ trợ 24/7)
              </a>
              <a
                href="https://t.me/Uyenadc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 block text-[14px] font-semibold text-ink-soft transition-colors hover:text-primary"
              >
                Telegram: @Uyenadc
              </a>
              <a
                href="mailto:nuyenaffluence.md@gmail.com"
                className="mt-2.5 block text-[14px] font-semibold text-ink-soft transition-colors hover:text-primary"
              >
                nuyenaffluence.md@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/vuongnm/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 block text-[14px] font-semibold text-ink-soft transition-colors hover:text-primary"
              >
                linkedin.com/in/vuongnm
              </a>
            </div>
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-grad-brand px-6 py-3 text-[13px] font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Mở trên Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border shadow-lift">
            <iframe
              title="Bản đồ văn phòng Affluence"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-ink-soft">
            Agency performance marketing chuyên sâu trong lĩnh vực giáo dục Việt Nam.
          </p>
        </div>
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-mute">
            Liên hệ
          </p>
          <a
            href="mailto:nuyenaffluence.md@gmail.com"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 shrink-0" />
            nuyenaffluence.md@gmail.com
          </a>
          <a
            href="tel:+84869688153"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 shrink-0" />
            Hotline: 0869 688 153 (08:00 – 17:30, hằng ngày)
          </a>
          <a
            href="https://zalo.me/0868688153"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <ZaloIcon className="h-4 w-4 shrink-0" />
            Zalo: 0868 688 153 (Hỗ trợ 24/7)
          </a>
          <a
            href="https://t.me/Uyenadc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <TelegramIcon className="h-4 w-4 shrink-0" />
            Telegram: @Uyenadc
          </a>
          <a
            href="https://www.linkedin.com/in/vuongnm/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <Linkedin className="h-4 w-4 shrink-0" />
            linkedin.com/in/vuongnm
          </a>
        </div>
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-mute">
            Địa chỉ
          </p>
          <p className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-soft">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            166/2D Đ. Trần Văn Dư, Tân Bình, Hồ Chí Minh 70000, Vietnam
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-[13px] text-ink-mute">
          © {new Date().getFullYear()} Affluence. Bản quyền thuộc về Affluence Vietnam.
        </div>
      </div>
    </footer>
  );
}
