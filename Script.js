document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const panels = document.querySelectorAll(".panel");
  const menuButtons = document.querySelectorAll(".menu-button");
  const themeCards = document.querySelectorAll(".theme-card");
  const styleChips = document.querySelectorAll(".style-chip");

  const pageTitle = document.getElementById("pageTitle");
  const pageSubtitle = document.getElementById("pageSubtitle");

  const sidebar = document.getElementById("sidebar");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileMenuButton = document.getElementById("mobileMenuButton");

  const quickThemeButton = document.getElementById("quickThemeButton");
  const darkModeButton = document.getElementById("darkModeButton");

  const profileForm = document.getElementById("profileForm");
  const clearProfileButton = document.getElementById("clearProfileButton");
  const profileSaveMessage = document.getElementById("profileSaveMessage");

  const miniAvatar = document.getElementById("miniAvatar");
  const miniProfileName = document.getElementById("miniProfileName");
  const miniProfileTheme = document.getElementById("miniProfileTheme");

  const welcomeIcon = document.getElementById("welcomeIcon");
  const welcomeTitle = document.getElementById("welcomeTitle");

  const customAccentColor = document.getElementById("customAccentColor");
  const applyCustomColorButton = document.getElementById(
    "applyCustomColorButton"
  );

  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");
  const messages = document.getElementById("messages");
  const chatScroll = document.getElementById("chatScroll");
  const newChatButton = document.getElementById("newChatButton");

  const imagePrompt = document.getElementById("imagePrompt");
  const generateButton = document.getElementById("generateButton");
  const imagePreviewText = document.getElementById("imagePreviewText");

  const toast = document.getElementById("toast");

  const themeNames = {
    mimi: "MiMiAi Pastel",
    magic: "Büyülü Akademi",
    boss: "Minik Patron",
    club: "Arkadaşlık Kulübü",
    yesday: "Yes Day",
    rainbow: "Gökkuşağı",
    unicorn: "Unicorn Rüyası"
  };

  const themeIcons = {
    mimi: "🌸",
    magic: "🪄",
    boss: "👶",
    club: "📚",
    yesday: "🎉",
    rainbow: "🌈",
    unicorn: "🦄"
  };

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(showToast.timeout);

    showToast.timeout = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2300);
  }

  function openPanel(panelId, title, subtitle) {
    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === panelId);
    });

    menuButtons.forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.panel === panelId
      );
    });

    if (pageTitle && title) {
      pageTitle.textContent = title;
    }

    if (pageSubtitle && subtitle) {
      pageSubtitle.textContent = subtitle;
    }

    closeMobileMenu();
  }

  function openMobileMenu() {
    sidebar?.classList.add("open");
    mobileOverlay?.classList.add("open");
  }

  function closeMobileMenu() {
    sidebar?.classList.remove("open");
    mobileOverlay?.classList.remove("open");
  }

  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openPanel(
        button.dataset.panel,
        button.dataset.title,
        button.dataset.subtitle
      );
    });
  });

  mobileMenuButton?.addEventListener("click", openMobileMenu);
  mobileOverlay?.addEventListener("click", closeMobileMenu);

  quickThemeButton?.addEventListener("click", () => {
    openPanel(
      "themesPanel",
      "Tema dünyası",
      "MiMiAi'nin görünümünü tamamen değiştir."
    );
  });

  function applyTheme(theme) {
    body.dataset.theme = theme;

    themeCards.forEach((card) => {
      card.classList.toggle(
        "selected",
        card.dataset.themeChoice === theme
      );
    });

    const icon = themeIcons[theme] || "🌸";
    const name = themeNames[theme] || "MiMiAi Pastel";

    if (miniAvatar) miniAvatar.textContent = icon;
    if (welcomeIcon) welcomeIcon.textContent = icon;
    if (miniProfileTheme) miniProfileTheme.textContent = name;

    localStorage.setItem("mimiai-theme", theme);
    showToast(`${name} teması uygulandı`);
  }

  themeCards.forEach((card) => {
    card.addEventListener("click", () => {
      applyTheme(card.dataset.themeChoice);
    });
  });

  const savedTheme = localStorage.getItem("mimiai-theme") || "mimi";
  applyTheme(savedTheme);

  darkModeButton?.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    darkModeButton.textContent = isDark ? "☀️" : "☾";

    localStorage.setItem("mimiai-dark-mode", String(isDark));
  });

  const savedDarkMode =
    localStorage.getItem("mimiai-dark-mode") === "true";

  if (savedDarkMode) {
    body.classList.add("dark");

    if (darkModeButton) {
      darkModeButton.textContent = "☀️";
    }
  }

  applyCustomColorButton?.addEventListener("click", () => {
    const color = customAccentColor?.value;

    if (!color) return;

    document.documentElement.style.setProperty(
      "--accent",
      color
    );

    localStorage.setItem("mimiai-custom-accent", color);
    showToast("Özel rengin uygulandı");
  });

  const savedAccent =
    localStorage.getItem("mimiai-custom-accent");

  if (savedAccent) {
    document.documentElement.style.setProperty(
      "--accent",
      savedAccent
    );

    if (customAccentColor) {
      customAccentColor.value = savedAccent;
    }
  }

  function getProfileData() {
    try {
      return JSON.parse(
        localStorage.getItem("mimiai-profile") || "{}"
      );
    } catch {
      return {};
    }
  }

  function updateProfileUI(profile) {
    const name = profile.name?.trim();

    if (miniProfileName) {
      miniProfileName.textContent =
        name || "MiMiAi kullanıcısı";
    }

    if (welcomeTitle) {
      welcomeTitle.textContent = name
        ? `Merhaba ${name}, ben MiMiAi`
        : "Merhaba, ben MiMiAi";
    }

    if (miniAvatar && name) {
      const initials = name
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join("");

      miniAvatar.textContent = initials;
    }
  }

  function loadProfileIntoForm() {
    const profile = getProfileData();

    const fields = {
      profileName: profile.name || "",
      profileBirthday: profile.birthday || "",
      profileCountry: profile.country || "",
      profileLanguage: profile.language || "tr",
      profileAbout: profile.about || "",
      profileGoals: profile.goals || "",
      profileAllergies: profile.allergies || ""
    };

    Object.entries(fields).forEach(([id, value]) => {
      const element = document.getElementById(id);

      if (element) {
        element.value = value;
      }
    });

    const selectedFoods = profile.food || [];

    document
      .querySelectorAll('input[name="food"]')
      .forEach((checkbox) => {
        checkbox.checked =
          selectedFoods.includes(checkbox.value);
      });

    updateProfileUI(profile);
  }

  profileForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const food = Array.from(
      document.querySelectorAll(
        'input[name="food"]:checked'
      )
    ).map((checkbox) => checkbox.value);

    const profile = {
      name:
        document.getElementById("profileName")?.value || "",
      birthday:
        document.getElementById("profileBirthday")?.value || "",
      country:
        document.getElementById("profileCountry")?.value || "",
      language:
        document.getElementById("profileLanguage")?.value || "tr",
      about:
        document.getElementById("profileAbout")?.value || "",
      goals:
        document.getElementById("profileGoals")?.value || "",
      allergies:
        document.getElementById("profileAllergies")?.value || "",
      food
    };

    localStorage.setItem(
      "mimiai-profile",
      JSON.stringify(profile)
    );

    updateProfileUI(profile);

    if (profileSaveMessage) {
      profileSaveMessage.textContent =
        "Bilgilerin kaydedildi ✓";
    }

    showToast("Kişisel bilgilerin kaydedildi");

    window.setTimeout(() => {
      if (profileSaveMessage) {
        profileSaveMessage.textContent = "";
      }
    }, 2500);
  });

  clearProfileButton?.addEventListener("click", () => {
    localStorage.removeItem("mimiai-profile");
    profileForm?.reset();
    updateProfileUI({});

    document
      .querySelectorAll('input[name="food"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
      });

    showToast("Kişisel bilgiler silindi");
  });

  loadProfileIntoForm();

  function addMessage(text, type) {
    const row = document.createElement("div");
    row.className =
      type === "user"
        ? "message-row user-row"
        : "message-row mimi-row";

    if (type === "mimi") {
      const avatar = document.createElement("div");
      avatar.className = "message-avatar";
      avatar.textContent =
        themeIcons[body.dataset.theme] || "🌸";
      row.appendChild(avatar);
    }

    const message = document.createElement("div");
    message.className =
      type === "user"
        ? "message user-message"
        : "message mimi-message";

    message.textContent = text;
    row.appendChild(message);
    messages?.appendChild(row);

    if (chatScroll) {
      chatScroll.scrollTop = chatScroll.scrollHeight;
    }
  }

  function sendMessage() {
    const text = messageInput?.value.trim();

    if (!text) return;

    addMessage(text, "user");
    messageInput.value = "";
    messageInput.style.height = "auto";

    window.setTimeout(() => {
      addMessage(
        "Mesajını aldım 🌸 Gerçek yapay zekâ bağlantısını eklediğimizde burada sana gerçek cevaplar vereceğim.",
        "mimi"
      );
    }, 500);
  }

  sendButton?.addEventListener("click", sendMessage);

  messageInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });

  messageInput?.addEventListener("input", () => {
    messageInput.style.height = "auto";
    messageInput.style.height =
      Math.min(messageInput.scrollHeight, 130) + "px";
  });

  document.querySelectorAll(".quick-card").forEach((card) => {
    card.addEventListener("click", () => {
      if (messageInput) {
        messageInput.value = card.dataset.prompt || "";
        messageInput.focus();
      }
    });
  });

  newChatButton?.addEventListener("click", () => {
    if (messages) {
      messages.innerHTML = `
        <div class="message-row mimi-row">
          <div class="message-avatar">
            ${themeIcons[body.dataset.theme] || "🌸"}
          </div>
          <div class="message mimi-message">
            Yeni sohbet başladı. Bugün ne konuşmak istersin?
          </div>
        </div>
      `;
    }

    openPanel(
      "chatPanel",
      "MiMiAi ile sohbet",
      "Aklındaki her şeyi rahatça sorabilirsin."
    );

    showToast("Yeni sohbet açıldı");
  });

  styleChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      styleChips.forEach((item) => {
        item.classList.remove("selected");
      });

      chip.classList.add("selected");
    });
  });

  generateButton?.addEventListener("click", () => {
    const prompt = imagePrompt?.value.trim();

    if (!prompt) {
      showToast("Önce bir görsel açıklaması yaz");
      return;
    }

    if (imagePreviewText) {
      imagePreviewText.textContent = prompt;
    }

    showToast("Görsel önizlemesi hazırlandı");
  });

  [
    "rememberProfile",
    "rememberFood",
    "rememberChats",
    "answerLength",
    "personalityMode"
  ].forEach((id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const savedValue = localStorage.getItem(`mimiai-${id}`);

    if (savedValue !== null) {
      if (element.type === "checkbox") {
        element.checked = savedValue === "true";
      } else {
        element.value = savedValue;
      }
    }

    element.addEventListener("change", () => {
      const value =
        element.type === "checkbox"
          ? String(element.checked)
          : element.value;

      localStorage.setItem(`mimiai-${id}`, value);
      showToast("Ayar kaydedildi");
    });
  });

  document.getElementById("brandLogo")?.addEventListener(
    "click",
    () => {
      openPanel(
        "chatPanel",
        "MiMiAi ile sohbet",
        "Aklındaki her şeyi rahatça sorabilirsin."
      );
    }
  );

  document.getElementById("attachmentButton")?.addEventListener(
    "click",
    () => {
      openPanel(
        "filesPanel",
        "Dosyalar ve PDF",
        "Belgelerini yükle ve MiMiAi ile incele."
      );
    }
  );

  document.getElementById("voiceButton")?.addEventListener(
    "click",
    () => {
      showToast(
        "Sesli konuşma özelliğini yapay zekâ bağlantısıyla ekleyeceğiz"
      );
    }
  );
});
