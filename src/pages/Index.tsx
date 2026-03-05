import { useState } from "react";
import Icon from "@/components/ui/icon";

const CTAButton = ({ children, large = false }: { children: React.ReactNode; large?: boolean }) => (
  <button
    className={`bg-[#1a1a1a] text-white font-ibm font-medium tracking-wide hover:bg-[#333] transition-colors duration-200 ${large ? "px-10 py-4 text-base" : "px-8 py-3 text-sm"}`}
  >
    {children}
  </button>
);

const Divider = () => <div className="w-12 h-px bg-[#1a1a1a] my-8" />;

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-3 items-start">
    <span className="text-[#1a1a1a] mt-0.5 shrink-0">
      <Icon name="Check" size={16} />
    </span>
    <span className="font-ibm text-[15px] text-[#333] leading-relaxed">{text}</span>
  </div>
);

const DashItem = ({ text }: { text: string }) => (
  <div className="flex gap-3 items-start">
    <span className="text-[#999] mt-1.5 shrink-0 text-xs">—</span>
    <span className="font-ibm text-[15px] text-[#444] leading-relaxed">{text}</span>
  </div>
);

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "А если мне не подойдёт?",
      a: "Именно для этого существует стратегическая сессия. За 30 минут мы вместе поймём, есть ли смысл работать. Если увидим, что наша система вам не нужна или не подходит — скажем об этом прямо. Нам невыгодно брать клиентов, которым мы не сможем помочь.",
    },
    {
      q: "Как происходит переход от текущего бухгалтера?",
      a: "Максимально безболезненно для вас. Мы сами связываемся с вашим бухгалтером, получаем все базы и документы, проводим аудит. Вам нужно только подписать доверенность и ответить на несколько вопросов о бизнесе. Всё остальное — наша работа.",
    },
    {
      q: "У меня уже есть бухгалтер в штате. Зачем мне аутсорс?",
      a: "Вопрос не в том, где сидит бухгалтер — в вашем офисе или в нашем. Вопрос в системе. Штатный бухгалтер работает один, без контроля, без второго мнения. Заболел — всё встало. Уволился — катастрофа. У нас работает команда, где каждого сотрудника страхуют коллеги. Плюс вы получаете доступ к 26-летнему опыту Марии и юридическому отделу.",
    },
    {
      q: "Почему так дёшево? В чём подвох?",
      a: "Подвоха нет. 25 000 рублей — это не «дёшево». Это справедливая цена за систему, которая работает. Мы не раздуваем штат, не снимаем офис в Москва-Сити. Всё идёт в качество работы и зарплаты специалистам.",
    },
    {
      q: "А вдруг вы тоже исчезнете, как прошлые подрядчики?",
      a: "Мы на рынке 11 лет. Пережили два кризиса, пандемию и всё остальное. Наши клиенты работают с нами годами — потому что мы даём результат. Если вам нужны дополнительные гарантии — мы готовы прописать в договоре всё, что вас успокоит.",
    },
  ];

  const levels = [
    {
      num: "01",
      title: "Ежедневный мониторинг рисков блокировки",
      icon: "ShieldCheck",
      desc: "Каждый день отслеживаем ключевые показатели, на которые смотрят банки и налоговая. Уровень налоговой нагрузки, НДС-цепочки, операции по 115-ФЗ. Не сухой отчёт, а конкретные рекомендации: «В этом месяце рекомендуем увеличить платёж на 80 000 рублей» или «Этот платёж лучше разбить на два».",
    },
    {
      num: "02",
      title: "Щит для ключевых сделок",
      icon: "FileSearch",
      desc: "Проверяем каждого контрагента до того, как вы подпишете договор. Формируем досье должной осмотрительности. Даже самый выгодный контракт не станет миной замедленного действия, которая взорвётся через год.",
    },
    {
      num: "03",
      title: "Центр управления «Спокойствие»",
      icon: "CalendarCheck",
      desc: "Доступ к облачному календарю всех дедлайнов по вашей компании. В реальном времени. С уведомлениями. Но главное — вам не нужно туда смотреть. Мы сами следим за каждым сроком. Вы просто знаете, что всё под контролем.",
    },
    {
      num: "04",
      title: "Финансовый периметр",
      icon: "Bell",
      desc: "Мониторим базы судебных дел, реестры проверок, публикации о вашей компании. Если где-то появляется сигнал — вы узнаёте мгновенно. Не через месяц, когда иск уже в суде. А сразу, в момент появления информации.",
    },
  ];

  return (
    <div className="font-ibm bg-white text-[#1a1a1a]">

      {/* ── HERO (БЛОК Q) ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 max-w-5xl mx-auto">
        <p className="font-ibm text-xs tracking-[0.25em] uppercase text-[#999] mb-10">
          Специализированная бухгалтерия · Строительные компании · Москва и область
        </p>
        <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-[#1a1a1a] mb-8">
          Ваша стройка работает<br />
          <span className="italic">без остановки.</span><br />
          Гарантируем.
        </h1>
        <p className="font-ibm text-lg text-[#555] max-w-2xl leading-relaxed mb-12">
          Пока обычные бухгалтеры разгребают последствия блокировок и штрафов, мы устраняем их причины. Специализированная бухгалтерия для строительных компаний с оборотом от 100 млн рублей.
        </p>
        <CTAButton large>Записаться на стратегическую сессию →</CTAButton>

        <Divider />

        <p className="font-ibm text-sm text-[#999] mb-4 tracking-wide">Эта страница для вас, если:</p>
        <div className="grid gap-2.5 max-w-xl">
          <DashItem text="Вы владелец или генеральный директор строительной компании в Москве или области" />
          <DashItem text="Ваш оборот от 100 до 300 млн рублей, и вы работаете с НДС" />
          <DashItem text="Вы устали узнавать о налоговых платежах в последний момент" />
          <DashItem text="Вы хотите сосредоточиться на объектах и тендерах, а не на требованиях из налоговой" />
        </div>
      </section>

      {/* ── ПРОБЛЕМА (БЛОК U) ── */}
      <section className="bg-[#f7f6f4] px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-ibm text-xs tracking-[0.25em] uppercase text-[#999] mb-8">Ситуация</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold leading-tight text-[#1a1a1a] mb-10 max-w-3xl">
            Представьте обычный понедельник.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-ibm text-[15px] text-[#444] leading-[1.8] mb-6">
                Вы едете на объект, в голове — переговоры с заказчиком, сроки, субподрядчики. Обычная рабочая загрузка.
              </p>
              <p className="font-ibm text-[15px] text-[#444] leading-[1.8] mb-6">
                И тут звонок от прораба: «Бетон не привезли. Говорят, оплата не прошла». Вы набираете бухгалтера. Гудки. Ещё раз. Не берёт. Перезванивает через час: «Я не знаю, что случилось, сейчас разберусь...»
              </p>
              <p className="font-ibm text-[15px] text-[#444] leading-[1.8]">
                Техника стоит. Люди ждут. Заказчик требует объяснений. Субподрядчик намекает на неустойку. И вы — человек, который построил этот бизнес своими руками — чувствуете себя абсолютно беспомощным.
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-ibm text-sm text-[#999] mb-4">Узнаёте себя?</p>
              <DashItem text="О налоговых платежах узнаёте в последний день — поздно что-то оптимизировать" />
              <DashItem text="Требования из налоговой приходят регулярно, и каждый раз это стресс" />
              <DashItem text="Подписываете стопки документов не глядя, потому что разбираться некогда" />
              <DashItem text="Подозреваете, что переплачиваете по налогам, но не понимаете где" />
              <DashItem text="Зависите от одного человека: заболел — всё встало" />
              <DashItem text="Не помните, когда последний раз спокойно уехали в отпуск" />
              <div className="mt-6 pt-6 border-t border-[#e5e2dc]">
                <p className="font-ibm text-[13px] text-[#666] leading-relaxed">
                  Если хотя бы два пункта про вас — вы живёте в режиме «реактивной бухгалтерии».<br />
                  <span className="text-[#1a1a1a] font-medium">Это не ваша вина. Это вопрос системы.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── МАРИЯ (БЛОК E) ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 max-w-5xl mx-auto">
        <p className="font-ibm text-xs tracking-[0.25em] uppercase text-[#999] mb-8">Основатель</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold leading-tight text-[#1a1a1a] mb-6">
              Мария знает это<br />
              <span className="italic">не из учебников</span>
            </h2>
            <p className="font-ibm text-[15px] text-[#444] leading-[1.8] mb-6">
              26 лет главным бухгалтером. Новороссийский морской торговый порт, строительство торговых центров, олимпийские объекты в Сочи.
            </p>
            <p className="font-ibm text-[15px] text-[#444] leading-[1.8] mb-8">
              Она видела изнутри, как разваливаются большие строительные проекты из-за бухгалтерских ошибок, которых можно было избежать. И видела, как это предотвратить — если перестать работать «по факту» и начать работать на опережение.
            </p>
            <p className="font-ibm text-[15px] text-[#444] leading-[1.8]">
              Именно поэтому 11 лет назад она создала компанию, которая работает по другим правилам.
            </p>
          </div>
          <div className="space-y-3 pt-2">
            <CheckItem text="Два высших образования: бухгалтерское и юридическое" />
            <CheckItem text="Членство в Палате налоговых консультантов Москвы" />
            <CheckItem text="Действующая судебная практика по налоговым спорам" />
            <CheckItem text="Статус партнёра 1С" />
            <CheckItem text="Опыт преподавания на курсах для главных бухгалтеров" />
            <div className="mt-8 pt-8 border-t border-[#e5e2dc]">
              <p className="font-cormorant text-xl italic text-[#555] leading-relaxed">
                «Не тушить пожары, а не давать им начаться.»
              </p>
              <p className="font-ibm text-xs text-[#999] mt-2">Принцип работы компании</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── СИСТЕМА (БЛОК S) ── */}
      <section className="bg-[#1a1a1a] text-white px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-ibm text-xs tracking-[0.25em] uppercase text-[#888] mb-8">Система защиты</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold leading-tight mb-4">
            «Протокол Анти-Блок»
          </h2>
          <p className="font-ibm text-[15px] text-[#aaa] mb-16 max-w-2xl">
            Четырёхуровневая система защиты, разработанная специально для строительного бизнеса. Каждый уровень решает конкретную задачу. Вместе они делают блокировку вашего счёта практически невозможной.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-[#333]">
            {levels.map((l) => (
              <div key={l.num} className="bg-[#1a1a1a] p-8 hover:bg-[#222] transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-cormorant text-5xl font-semibold text-[#444] leading-none">{l.num}</span>
                  <Icon name={l.icon} size={20} className="text-white mt-3 shrink-0" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-white mb-3 leading-tight">{l.title}</h3>
                <p className="font-ibm text-[14px] text-[#aaa] leading-[1.8]">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── КЕЙС ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 max-w-5xl mx-auto">
        <p className="font-ibm text-xs tracking-[0.25em] uppercase text-[#999] mb-8">Результаты клиента</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold leading-tight text-[#1a1a1a] mb-6">
              История компании<br />
              <span className="italic">«СтройМонтаж»</span>
            </h2>
            <p className="font-ibm text-[15px] text-[#444] leading-[1.8] mb-4">
              Алексей, владелец строительной компании с оборотом 180 млн рублей, пришёл к нам после того, как его счёт заблокировали на 4 дня. Причина — крупный платёж субподрядчику без правильного обоснования.
            </p>
            <p className="font-ibm text-[15px] text-[#444] leading-[1.8] mb-4">
              За 4 дня компания потеряла около <strong className="text-[#1a1a1a]">1 700 000 рублей</strong>: простой техники, срыв поставки бетона, неустойка заказчику.
            </p>
            <blockquote className="border-l-2 border-[#1a1a1a] pl-6 mt-8">
              <p className="font-cormorant text-xl italic text-[#333] leading-relaxed">
                «Впервые за 7 лет я не думаю о бухгалтерии вообще. Просто получаю уведомления, что всё сделано. Это бесценно.»
              </p>
              <footer className="font-ibm text-xs text-[#999] mt-3">— Алексей, СтройМонтаж, оборот 180 млн ₽</footer>
            </blockquote>
          </div>
          <div className="space-y-6">
            <p className="font-ibm text-sm text-[#999]">Результаты за 11 месяцев работы:</p>
            {[
              { label: "Блокировок счёта", value: "0" },
              { label: "Экономия на оптимизации НДС", value: "940 000 ₽" },
              { label: "Камеральная проверка", value: "Без штрафов" },
              { label: "Предотвращено кассовых разрывов", value: "2" },
            ].map((stat) => (
              <div key={stat.label} className="flex justify-between items-baseline border-b border-[#e5e2dc] pb-4">
                <span className="font-ibm text-[14px] text-[#666]">{stat.label}</span>
                <span className="font-cormorant text-2xl font-semibold text-[#1a1a1a]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA MIDDLE ── */}
      <section className="bg-[#f7f6f4] px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold leading-tight text-[#1a1a1a] mb-6">
            Готовы перестать тушить пожары<br />
            <span className="italic">и начать их предотвращать?</span>
          </h2>
          <p className="font-ibm text-[15px] text-[#555] mb-10 leading-relaxed">
            25 000 рублей в месяц — это 820 рублей в день. Меньше, чем стоимость одного часа работы вашего экскаватора.
          </p>
          <CTAButton large>Записаться на стратегическую сессию →</CTAButton>
          <p className="font-ibm text-xs text-[#999] mt-4">Бесплатно · 30 минут · Без обязательств</p>
        </div>
      </section>

      {/* ── БОНУСЫ И ГАРАНТИИ ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Бонусы */}
          <div>
            <p className="font-ibm text-xs tracking-[0.25em] uppercase text-[#999] mb-8">Бонусы</p>
            <div className="space-y-10">
              <div className="border-b border-[#e5e2dc] pb-10">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Scale" size={18} className="text-[#1a1a1a]" />
                  <h3 className="font-cormorant text-2xl font-semibold text-[#1a1a1a]">Юридический Щит</h3>
                </div>
                <p className="font-ibm text-[14px] text-[#555] leading-[1.8] mb-3">
                  Доступ к юридическому отделу для консультаций по договорам, претензиям и оценке судебных перспектив. Наши юристы уже в теме вашего бизнеса.
                </p>
                <p className="font-ibm text-xs text-[#999]">Рыночная стоимость: 15 000 ₽/мес · <span className="text-[#1a1a1a] font-medium">Включено в пакет</span></p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="CheckCircle" size={18} className="text-[#1a1a1a]" />
                  <h3 className="font-cormorant text-2xl font-semibold text-[#1a1a1a]">Зелёный Свет для Этапа</h3>
                </div>
                <p className="font-ibm text-[14px] text-[#555] leading-[1.8] mb-3">
                  Перед началом работ проверяем поступление средств и даём официальное подтверждение: «Финансирование подтверждено. Можно начинать».
                </p>
                <p className="font-ibm text-xs text-[#999]">Ценность: 15 000 ₽/мес · <span className="text-[#1a1a1a] font-medium">Включено в пакет</span></p>
              </div>
            </div>
          </div>
          {/* Гарантии */}
          <div>
            <p className="font-ibm text-xs tracking-[0.25em] uppercase text-[#999] mb-8">Тройная гарантия</p>
            <div className="space-y-8">
              {[
                {
                  icon: "Shield",
                  title: "Защита от блокировки",
                  text: "Если счёт будет заблокирован по нашей вине — следующий месяц обслуживания полностью за наш счёт.",
                },
                {
                  icon: "Search",
                  title: "Чистый старт",
                  text: "Полный аудит учёта за предыдущий год. Находим и нейтрализуем все «мины» прошлого бухгалтера. Берём на себя 100% общения с ним.",
                },
                {
                  icon: "UserCheck",
                  title: "Личная ответственность",
                  text: "Каждый бухгалтер несёт личную финансовую ответственность. Если по его вине вы получите штраф — он выплачивается из его кармана.",
                },
              ].map((g) => (
                <div key={g.title} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 border border-[#1a1a1a] flex items-center justify-center">
                    <Icon name={g.icon} size={14} />
                  </div>
                  <div>
                    <h4 className="font-ibm text-[14px] font-medium text-[#1a1a1a] mb-1">{g.title}</h4>
                    <p className="font-ibm text-[14px] text-[#555] leading-[1.7]">{g.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ЦЕНА ── */}
      <section className="bg-[#1a1a1a] text-white px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-ibm text-xs tracking-[0.25em] uppercase text-[#888] mb-8">Инвестиция</p>
              <div className="mb-2">
                <span className="font-ibm text-xs text-[#666] line-through">55 000 ₽/мес общая ценность</span>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-cormorant text-7xl font-semibold text-white">25 000</span>
                <span className="font-ibm text-lg text-[#aaa]">₽/мес</span>
              </div>
              <p className="font-ibm text-[14px] text-[#888] mb-10 leading-relaxed">
                820 рублей в день. Меньше, чем стоимость одного часа работы вашего экскаватора.
              </p>
              <div className="bg-[#e8e2d9] text-[#1a1a1a] px-6 py-4 mb-8">
                <p className="font-ibm text-sm font-medium">⚠ В этом месяце осталось 1 место</p>
                <p className="font-ibm text-xs text-[#555] mt-1">Следующее окно откроется через 3–4 недели</p>
              </div>
              <button className="border border-white text-white font-ibm font-medium text-sm px-8 py-3 hover:bg-white hover:text-[#1a1a1a] transition-colors duration-200">
                Записаться на стратегическую сессию →
              </button>
            </div>
            <div className="space-y-4">
              <p className="font-ibm text-sm text-[#888] mb-6">Что входит:</p>
              {[
                "Ежедневный мониторинг рисков блокировки с рекомендациями",
                "Досье должной осмотрительности по каждой ключевой сделке",
                "Облачный календарь дедлайнов + полный контроль отчётности",
                "Мгновенные оповещения об исках, проверках и угрозах",
                "Пакет «Юридический Щит» — бесплатно",
                "Сервис «Зелёный Свет для Этапа» — бесплатно",
                "Тройная гарантия результата",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <Icon name="Check" size={14} className="text-white mt-0.5 shrink-0" />
                  <span className="font-ibm text-[14px] text-[#ccc] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 max-w-3xl mx-auto">
        <p className="font-ibm text-xs tracking-[0.25em] uppercase text-[#999] mb-8">Частые вопросы</p>
        <div className="divide-y divide-[#e5e2dc]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left flex justify-between items-start gap-4 py-6"
              >
                <span className="font-cormorant text-xl font-semibold text-[#1a1a1a] leading-tight">{faq.q}</span>
                <Icon
                  name={openFaq === i ? "Minus" : "Plus"}
                  size={16}
                  className="text-[#999] mt-1 shrink-0"
                />
              </button>
              {openFaq === i && (
                <p className="font-ibm text-[15px] text-[#555] leading-[1.8] pb-6">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── ФИНАЛЬНЫЙ ПРИЗЫВ ── */}
      <section className="bg-[#f7f6f4] px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold leading-[1.1] text-[#1a1a1a] mb-8">
            Это возможно.<br />
            <span className="italic">И это ближе, чем вам кажется.</span>
          </h2>
          <p className="font-ibm text-[15px] text-[#555] max-w-xl mx-auto leading-[1.8] mb-12">
            Когда вы на переговорах с заказчиком, а в телефон приходит сообщение: «Налоговая прислала запрос. Мы уже ответили. Рисков нет». Когда вы в отпуске с семьёй, а бухгалтерия работает как часы.
          </p>
          <CTAButton large>Записаться на стратегическую сессию →</CTAButton>
          <p className="font-ibm text-xs text-[#999] mt-4">30-минутная консультация · Бесплатно · Без давления</p>
          <p className="font-ibm text-xs text-[#bbb] mt-8">«Ваш персональный бухгалтер» · 11 лет на рынке · Москва и область</p>
        </div>
      </section>
    </div>
  );
}