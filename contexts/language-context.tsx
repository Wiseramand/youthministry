"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Header
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.aboutUs": "Sobre Nós",
    "nav.founder": "O Fundador",
    "nav.projects": "Projetos",
    "nav.partnerships": "Parcerias",
    "nav.tv": "TV ao Vivo",
    "nav.login": "Entrar",
    "nav.membership": "Seja Membro",
    "nav.myAccount": "Minha Conta",
    "nav.logout": "Sair",

    // Hero Section
    "hero.welcome": "Bem-vindo ao",
    "hero.title": "Ministério de Jovens e Adolescentes",
    "hero.subtitle":
      "Transformando vidas através da Palavra de Deus, capacitando a próxima geração para impactar o mundo.",
    "hero.cta": "Junte-se a Nós",
    "hero.learnMore": "Saiba Mais",
    "hero.members": "Membros Ativos",
    "hero.countries": "Países",
    "hero.events": "Eventos Anuais",

    // Network Cards
    "network.joinOur": "JUNTE-SE À NOSSA REDE DE",
    "network.teenagers": "Adolescentes",
    "network.teenagersDesc": "Impactando o seu mundo",
    "network.youths": "Jovens",
    "network.youthsDesc": "Impactando o seu mundo",
    "network.teevoClubs": "Clubes TeeVo",
    "network.teevoClubsDesc": "Adolescentes impactando as suas escolas em todo o mundo",

    // Features Section
    "features.title": "O Que Fazemos",
    "features.subtitle": "Capacitando jovens através de diversos programas e iniciativas",
    "features.discipleship": "Discipulado",
    "features.discipleshipDesc": "Formação espiritual profunda baseada na Palavra de Deus",
    "features.community": "Comunidade",
    "features.communityDesc": "Conexões significativas com jovens de todo o mundo",
    "features.evangelism": "Evangelismo",
    "features.evangelismDesc": "Levando o Evangelho a todas as nações e povos",
    "features.leadership": "Liderança",
    "features.leadershipDesc": "Desenvolvendo líderes para impactar gerações",

    // Gallery Section
    "gallery.title": "Nossos Momentos",
    "gallery.subtitle": "Capturando momentos especiais do nosso ministério",

    // CTA Section
    "cta.title": "Pronto para Fazer Parte?",
    "cta.subtitle":
      "Junte-se a milhares de jovens que estão transformando suas vidas e impactando o mundo através do Evangelho.",
    "cta.button": "Torne-se Membro Hoje",

    // Footer
    "footer.description": "Transformando vidas, impactando gerações através da Palavra de Deus.",
    "footer.quickLinks": "Links Rápidos",
    "footer.contact": "Contacto",
    "footer.followUs": "Siga-nos",
    "footer.rights": "Todos os direitos reservados.",

    // Login Modal
    "login.title": "Entrar na sua conta",
    "login.subtitle": "Acesse sua conta de membro",
    "login.email": "Email",
    "login.password": "Senha",
    "login.forgot": "Esqueceu a senha?",
    "login.button": "Entrar",
    "login.noAccount": "Não tem uma conta?",
    "login.register": "Registre-se",

    // Membership Modal
    "membership.title": "Torne-se Membro",
    "membership.subtitle": "Junte-se à nossa família global",
    "membership.fullName": "Nome Completo",
    "membership.email": "Email",
    "membership.phone": "Telefone",
    "membership.birthDate": "Data de Nascimento",
    "membership.country": "País",
    "membership.selectCountry": "Selecione o país",
    "membership.province": "Província",
    "membership.selectProvince": "Selecione a província",
    "membership.city": "Cidade",
    "membership.button": "Enviar Inscrição",
    "membership.success": "Inscrição enviada com sucesso!",
    "membership.successMsg": "Entraremos em contacto em breve.",

    // About Page
    "about.title": "Sobre Nós",
    "about.subtitle": "Conheça a nossa história, missão e visão",
    "about.historyTitle": "Nossa História",
    "about.historyText":
      "O Ministério de Jovens e Adolescentes do Grupo Angola nasceu com a visão de alcançar e transformar a juventude angolana através do poder do Evangelho de Jesus Cristo.",
    "about.visionTitle": "Visão",
    "about.vision1": "Levar a presença divina de Deus às nações e povos do mundo.",
    "about.vision2": "Demonstrar o caráter do Espírito Santo.",
    "about.missionTitle": "Missão",
    "about.mission1":
      "Levantar gerações de homens e mulheres que entrarão na sua herança para cumprir o sonho de Deus.",
    "about.mission2":
      "Fazer discípulos de todas as nações, batizando-os em nome do Pai, do Filho e do Espírito Santo (baseado em Mateus 28:19).",
    "about.purposeTitle": "Propósito",
    "about.purpose": "Trazer as pessoas à sua herança divina em Cristo.",
    "about.valuesTitle": "Nossos Valores",
    "about.leadershipTitle": "Nossa Liderança",

    // Founder Page
    "founder.title": "O Fundador",
    "founder.subtitle": "Conheça o Pastor Chris Oyakhilome",
    "founder.name": "Pastor Chris Oyakhilome D.Sc., D.D.",
    "founder.role": "Fundador e Presidente do LoveWorld Inc.",
    "founder.bio1":
      "O Pastor Chris Oyakhilome Ph.D. é o presidente do LoveWorld Inc., uma organização dinâmica, multifacetada e global dedicada a levar a mensagem de salvação aos confins da terra.",
    "founder.bio2":
      "Autor do devocional diário mais distribuído do mundo, a Rapsódia de Realidades, o Pastor Chris é um homem enviado por Deus para trazer a luz do Evangelho às nações.",
    "founder.globalVision": "Visão Global",
    "founder.globalVisionText":
      "Através da sua liderança visionária, milhões de vidas foram transformadas em todo o mundo através de várias plataformas de mídia, cruzadas de cura e programas de alcance.",
    "founder.humanitarian": "Impacto Humanitário",
    "founder.humanitarianText":
      "A InnerCity Mission, fundada pelo Pastor Chris, tem alimentado, vestido e educado milhões de crianças carentes em todo o mundo.",

    // Projects Page
    "projects.title": "Nossos Projetos",
    "projects.subtitle": "Conheça as iniciativas que estão transformando vidas",
    "projects.all": "Todos",
    "projects.evangelism": "Evangelismo",
    "projects.education": "Educação",
    "projects.community": "Comunidade",
    "projects.learnMore": "Saiba Mais",

    // Partnerships Page
    "partnerships.title": "Parcerias",
    "partnerships.subtitle": "Conheça os nossos braços de parceria e faça parte desta missão",
    "partnerships.becomePartner": "Seja Parceiro",
    "partnerships.startFrom": "Comece com apenas 100 Kz",
    "partnerships.ctaTitle": "Faça Parte Desta Missão",
    "partnerships.ctaText":
      "A sua parceria faz a diferença. Junte-se a nós e ajude a transformar vidas através do Evangelho.",
    "partnerships.ctaButton": "Tornar-me Parceiro",

    // TV Page
    "tv.title": "TV ao Vivo",
    "tv.subtitle": "Assista aos nossos programas em direto",
    "tv.liveNow": "AO VIVO AGORA",
    "tv.schedule": "Programação Semanal",
    "tv.pastPrograms": "Programas Anteriores",
    "tv.watchNow": "Assistir Agora",

    // Teenagers Page
    "teens.welcome": "BEM-VINDO AO LOVEWORLD TEENS MINISTRY",
    "teens.hey": "EI",
    "teens.welcomeTitle": "BEM-VINDO",
    "teens.heroText":
      "O Ministério de Adolescentes foi criado para ajudar os adolescentes a descobrir a sua identidade através da verdade da Palavra de Deus.",
    "teens.scrollDown": "Descer",
    "teens.givingMeaning": "Dando sentido à sua vida",
    "teens.meaningText":
      "Cada adolescente em qualquer parte do mundo merece a oportunidade de ser a melhor versão de si mesmo e viver a vida que o Mestre destinou para eles.",
    "teens.joinUs": "Junte-se a Nós",
    "teens.joinTeens": "Junte-se ao ministério de adolescentes hoje.",

    // Youth Page
    "youth.title": "Loveworld Youth Ministry",
    "youth.description":
      "O Ministério de Jovens dedica-se a orientar os jovens respondendo às questões da vida com base na Palavra de Deus. É um lugar onde os jovens podem crescer espiritualmente, construir um relacionamento com o Espírito Santo e encontrar o seu propósito através do evangelho. Através de vários programas, iniciativas e mentoria, o ministério de jovens equipa os jovens para viverem a sua vida de fé com ousadia.",
    "youth.joinMinistry": "Junta-te ao Ministério de Jovens",
    "youth.joinText": "Junta-te ao ministério de jovens hoje preenchendo o formulário abaixo.",

    // TeeVo Clubs Page
    "teevo.about": "SOBRE",
    "teevo.title": "Clubes TeeVo",
    "teevo.description":
      "Os Clubes TeeVo são comunidades estrategicamente posicionadas em todas as escolas para a propagação do evangelho através de vários meios. Através destes clubes TeeVo, todas as escolas são penetradas com a verdade à medida que a mensagem é pregada através do estabelecimento de cada comunidade. Assim, criando uma plataforma para que os adolescentes cresçam espiritualmente e influenciem positivamente os seus pares. Muitas vidas são transformadas devido à poderosa mensagem na Rapsódia de Realidades TeeVo, trazendo clareza, propósito e direção às mentes jovens.",
    "teevo.gallery": "Galeria dos Clubes",
    "teevo.benefits": "Benefícios de Participar",
    "teevo.benefit1": "Crescimento Espiritual",
    "teevo.benefit1Desc": "Desenvolva a sua fé através de estudos bíblicos regulares e comunhão",
    "teevo.benefit2": "Desenvolvimento de Liderança",
    "teevo.benefit2Desc": "Aprenda habilidades de liderança e seja mentor de outros estudantes",
    "teevo.benefit3": "Comunidade Escolar",
    "teevo.benefit3Desc": "Construa amizades significativas com colegas que partilham a mesma fé",
    "teevo.benefit4": "Impacto Mundial",
    "teevo.benefit4Desc": "Faça parte de um movimento global que está a transformar escolas",
    "teevo.startClub": "Começar um Clube TeeVo",
    "teevo.startClubText": "Quer iniciar um Clube TeeVo na sua escola? Preencha o formulário e entraremos em contacto.",
    "teevo.registerNow": "Inscrever-se Agora",

    // TeeVo Modal
    "teevoModal.title": "Começar um Clube TeeVo",
    "teevoModal.subtitle": "Preencha o formulário para iniciar um clube na sua escola",
    "teevoModal.name": "Nome Completo",
    "teevoModal.email": "Email",
    "teevoModal.phone": "Telefone",
    "teevoModal.age": "Idade",
    "teevoModal.schoolYear": "Ano Escolar",
    "teevoModal.school": "Nome da Escola",
    "teevoModal.province": "Província",
    "teevoModal.city": "Cidade",
    "teevoModal.expectedMembers": "Quantidade Esperada de Membros",
    "teevoModal.motivation": "Motivação",
    "teevoModal.motivationPlaceholder": "Por que deseja iniciar um Clube TeeVo?",
    "teevoModal.submit": "Enviar Inscrição",
    "teevoModal.success": "Inscrição Enviada!",
    "teevoModal.successText":
      "Obrigado pelo seu interesse em iniciar um Clube TeeVo! A nossa equipa entrará em contacto em breve.",
    "teevoModal.close": "Fechar",

    // Common
    "common.name": "Nome",
    "common.email": "Email",
    "common.phone": "Telefone",
    "common.address": "Endereço",
    "common.city": "Cidade",
    "common.province": "Província",
    "common.country": "País",
    "common.submit": "Enviar",
    "common.cancel": "Cancelar",
    "common.close": "Fechar",
    "common.loading": "Carregando...",
    "common.success": "Sucesso!",
    "common.error": "Erro",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.aboutUs": "About Us",
    "nav.founder": "The Founder",
    "nav.projects": "Projects",
    "nav.partnerships": "Partnerships",
    "nav.tv": "Live TV",
    "nav.login": "Login",
    "nav.membership": "Become a Member",
    "nav.myAccount": "My Account",
    "nav.logout": "Logout",

    // Hero Section
    "hero.welcome": "Welcome to",
    "hero.title": "Youth and Teens Ministry",
    "hero.subtitle": "Transforming lives through God's Word, empowering the next generation to impact the world.",
    "hero.cta": "Join Us",
    "hero.learnMore": "Learn More",
    "hero.members": "Active Members",
    "hero.countries": "Countries",
    "hero.events": "Annual Events",

    // Network Cards
    "network.joinOur": "JOIN OUR NETWORK OF",
    "network.teenagers": "Teenagers",
    "network.teenagersDesc": "Impacting their world",
    "network.youths": "Youths",
    "network.youthsDesc": "Impacting their world",
    "network.teevoClubs": "TeeVo Clubs",
    "network.teevoClubsDesc": "Teenagers impacting their schools around the world",

    // Features Section
    "features.title": "What We Do",
    "features.subtitle": "Empowering youth through diverse programs and initiatives",
    "features.discipleship": "Discipleship",
    "features.discipleshipDesc": "Deep spiritual formation based on God's Word",
    "features.community": "Community",
    "features.communityDesc": "Meaningful connections with young people worldwide",
    "features.evangelism": "Evangelism",
    "features.evangelismDesc": "Taking the Gospel to all nations and peoples",
    "features.leadership": "Leadership",
    "features.leadershipDesc": "Developing leaders to impact generations",

    // Gallery Section
    "gallery.title": "Our Moments",
    "gallery.subtitle": "Capturing special moments from our ministry",

    // CTA Section
    "cta.title": "Ready to Be Part?",
    "cta.subtitle":
      "Join thousands of young people who are transforming their lives and impacting the world through the Gospel.",
    "cta.button": "Become a Member Today",

    // Footer
    "footer.description": "Transforming lives, impacting generations through God's Word.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",

    // Login Modal
    "login.title": "Sign in to your account",
    "login.subtitle": "Access your member account",
    "login.email": "Email",
    "login.password": "Password",
    "login.forgot": "Forgot password?",
    "login.button": "Sign In",
    "login.noAccount": "Don't have an account?",
    "login.register": "Register",

    // Membership Modal
    "membership.title": "Become a Member",
    "membership.subtitle": "Join our global family",
    "membership.fullName": "Full Name",
    "membership.email": "Email",
    "membership.phone": "Phone",
    "membership.birthDate": "Date of Birth",
    "membership.country": "Country",
    "membership.selectCountry": "Select country",
    "membership.province": "Province",
    "membership.selectProvince": "Select province",
    "membership.city": "City",
    "membership.button": "Submit Application",
    "membership.success": "Application submitted successfully!",
    "membership.successMsg": "We will contact you soon.",

    // About Page
    "about.title": "About Us",
    "about.subtitle": "Learn about our history, mission and vision",
    "about.historyTitle": "Our History",
    "about.historyText":
      "The Youth and Teens Ministry of Angola Group was born with the vision of reaching and transforming Angolan youth through the power of the Gospel of Jesus Christ.",
    "about.visionTitle": "Vision",
    "about.vision1": "To take God's divine presence to the nations and peoples of the world.",
    "about.vision2": "To demonstrate the character of the Holy Spirit.",
    "about.missionTitle": "Mission",
    "about.mission1":
      "To raise generations of men and women who will come into their inheritance to fulfill God's dream.",
    "about.mission2":
      "To make disciples of all nations, baptizing them in the name of the Father, Son, and Holy Spirit (drawing from Matthew 28:19).",
    "about.purposeTitle": "Purpose",
    "about.purpose": "To bring people into their divine inheritance in Christ.",
    "about.valuesTitle": "Our Values",
    "about.leadershipTitle": "Our Leadership",

    // Founder Page
    "founder.title": "The Founder",
    "founder.subtitle": "Meet Pastor Chris Oyakhilome",
    "founder.name": "Pastor Chris Oyakhilome D.Sc., D.D.",
    "founder.role": "Founder and President of LoveWorld Inc.",
    "founder.bio1":
      "Pastor Chris Oyakhilome Ph.D. is the president of LoveWorld Inc., a dynamic, multifaceted, and global organization dedicated to taking the message of salvation to the ends of the earth.",
    "founder.bio2":
      "Author of the world's most distributed daily devotional, Rhapsody of Realities, Pastor Chris is a man sent by God to bring the light of the Gospel to the nations.",
    "founder.globalVision": "Global Vision",
    "founder.globalVisionText":
      "Through his visionary leadership, millions of lives have been transformed worldwide through various media platforms, healing crusades, and outreach programs.",
    "founder.humanitarian": "Humanitarian Impact",
    "founder.humanitarianText":
      "The InnerCity Mission, founded by Pastor Chris, has fed, clothed, and educated millions of underprivileged children worldwide.",

    // Projects Page
    "projects.title": "Our Projects",
    "projects.subtitle": "Discover the initiatives that are transforming lives",
    "projects.all": "All",
    "projects.evangelism": "Evangelism",
    "projects.education": "Education",
    "projects.community": "Community",
    "projects.learnMore": "Learn More",

    // Partnerships Page
    "partnerships.title": "Partnerships",
    "partnerships.subtitle": "Discover our partnership arms and be part of this mission",
    "partnerships.becomePartner": "Become a Partner",
    "partnerships.startFrom": "Start with just 100 Kz",
    "partnerships.ctaTitle": "Be Part of This Mission",
    "partnerships.ctaText": "Your partnership makes a difference. Join us and help transform lives through the Gospel.",
    "partnerships.ctaButton": "Become a Partner",

    // TV Page
    "tv.title": "Live TV",
    "tv.subtitle": "Watch our programs live",
    "tv.liveNow": "LIVE NOW",
    "tv.schedule": "Weekly Schedule",
    "tv.pastPrograms": "Past Programs",
    "tv.watchNow": "Watch Now",

    // Teenagers Page
    "teens.welcome": "WELCOME TO THE LOVEWORLD TEENS MINISTRY",
    "teens.hey": "HEY",
    "teens.welcomeTitle": "WELCOME",
    "teens.heroText":
      "Teens Ministry is designed to help teenagers discover their identity through the truth of God's Word.",
    "teens.scrollDown": "Scroll Down",
    "teens.givingMeaning": "Giving your life a meaning",
    "teens.meaningText":
      "Every teenager in any part of the world deserves an opportunity to be the best version of themselves and live the life the master has purposed for them.",
    "teens.joinUs": "Join Us",
    "teens.joinTeens": "Join the teens ministry today.",

    // Youth Page
    "youth.title": "Loveworld Youth Ministry",
    "youth.description":
      "Youth Ministry is dedicated to guiding young people by answering life's questions based on the Word of God. It is a place where youth can grow spiritually, build a relationship with the Holy Ghost, and find their purpose through the gospel. Through various programs, initiatives, and mentorship, the youth ministry equips young people to live out their life of faith boldly.",
    "youth.joinMinistry": "Join The Youth Ministry",
    "youth.joinText": "Join the youth ministry today by filling up the forms below.",

    // TeeVo Clubs Page
    "teevo.about": "ABOUT",
    "teevo.title": "TeeVo Clubs",
    "teevo.description":
      "The TeeVo Clubs are fellowships strategically placed in every school for the spread of the gospel through various mediums. Through these TeeVo clubs, every school is penetrated with truth as the message is preached through the establishment of every fellowship. Thus, creating a platform for teenagers to grow spiritually and positively influence their peers. Many lives are transformed due to the powerful message in the Rhapsody of Realities TeeVo, bringing clarity, purpose, and direction to young minds.",
    "teevo.gallery": "Club Gallery",
    "teevo.benefits": "Benefits of Joining",
    "teevo.benefit1": "Spiritual Growth",
    "teevo.benefit1Desc": "Develop your faith through regular Bible studies and fellowship",
    "teevo.benefit2": "Leadership Development",
    "teevo.benefit2Desc": "Learn leadership skills and mentor other students",
    "teevo.benefit3": "School Community",
    "teevo.benefit3Desc": "Build meaningful friendships with peers who share the same faith",
    "teevo.benefit4": "Global Impact",
    "teevo.benefit4Desc": "Be part of a global movement that is transforming schools",
    "teevo.startClub": "Start a TeeVo Club",
    "teevo.startClubText": "Want to start a TeeVo Club at your school? Fill out the form and we'll get in touch.",
    "teevo.registerNow": "Register Now",

    // TeeVo Modal
    "teevoModal.title": "Start a TeeVo Club",
    "teevoModal.subtitle": "Fill out the form to start a club at your school",
    "teevoModal.name": "Full Name",
    "teevoModal.email": "Email",
    "teevoModal.phone": "Phone",
    "teevoModal.age": "Age",
    "teevoModal.schoolYear": "School Year",
    "teevoModal.school": "School Name",
    "teevoModal.province": "Province",
    "teevoModal.city": "City",
    "teevoModal.expectedMembers": "Expected Number of Members",
    "teevoModal.motivation": "Motivation",
    "teevoModal.motivationPlaceholder": "Why do you want to start a TeeVo Club?",
    "teevoModal.submit": "Submit Application",
    "teevoModal.success": "Application Submitted!",
    "teevoModal.successText": "Thank you for your interest in starting a TeeVo Club! Our team will contact you soon.",
    "teevoModal.close": "Close",

    // Common
    "common.name": "Name",
    "common.email": "Email",
    "common.phone": "Phone",
    "common.address": "Address",
    "common.city": "City",
    "common.province": "Province",
    "common.country": "Country",
    "common.submit": "Submit",
    "common.cancel": "Cancel",
    "common.close": "Close",
    "common.loading": "Loading...",
    "common.success": "Success!",
    "common.error": "Error",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "pt" || savedLang === "en")) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
