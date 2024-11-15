
document.addEventListener("DOMContentLoaded", () => {
    const plannerFiles = {
"2024": {
"Rainbow": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Boho": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Neutral": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Blush": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Jewel Tones": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Dusty Floral": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Soft Pastel": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care Planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
},
"2025": {
"Rainbow": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  
},
"Boho": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  
},
"Neutral": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  
},
"Blush": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  
},
"Dusty Floral": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  
},
},

"Undated": {
"Rainbow": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Setting Horizontal":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizaontal Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Vertical Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Horizaontal Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Priority Matrix": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Graph": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Blank": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Lined & Grid": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Setting Horizontal":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizaontal Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Vertical Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Horizaontal Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Priority Matrix": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Graph": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Blank": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Lined & Grid": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  
},
"Boho": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Neutral": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Blush": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Jewel Tones": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
},
"Dusty Floral": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Setting Horizontal":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizaontal Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Vertical Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Horizaontal Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Priority Matrix": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Graph": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Blank": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Lined & Grid": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Setting Horizontal":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizaontal Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Vertical Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Horizaontal Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Priority Matrix": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Graph": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Blank": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Lined & Grid": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  
},
"Soft Pastel": {
  "Sunday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Setting Horizontal":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizaontal Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Vertical Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Horizaontal Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Priority Matrix": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Graph": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Blank": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Lined & Grid": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  "Monday": {
    "Balanced": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Setting Horizontal":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizaontal Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Box Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Horizontal Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical Lined Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Vertical Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Goal Horizaontal Grey":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Half Journal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Canvas": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Productivity": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Minimal": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Manifestation": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "24 Hour planner": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Priority Matrix": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Graph": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Blank": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Self Care": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
    "Lined & Grid": {
      "dailyLayouts": {
        "Horizaontal Box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Vertical box":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Blank":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Grid":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
        "Weekly Scheduled":
          "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
      },
    },
  },
  
},

},
};

    const optionImages = {
      colors: {
        Rainbow: "https://i.ibb.co.com/cbpPvXJ/Screenshot-2024-11-15-140010.png",
        Boho: "https://i.ibb.co.com/YL18k3k/Screenshot-2024-11-15-140015.png",
        Neutral: "https://i.ibb.co.com/ZNZYzzw/Screenshot-2024-11-15-140021.png",
        Blush: "https://i.ibb.co.com/2K0jbRp/Screenshot-2024-11-15-140027.png",
        "Jewel Tones": "https://i.ibb.co.com/HxsfKKC/Screenshot-2024-11-15-140032.png",
        "Dusty Floral": "https://i.ibb.co.com/LR3CJp5/Screenshot-2024-11-15-140036.png",
        "Soft Pastel": "https://i.ibb.co.com/0CwMc5K/Screenshot-2024-11-15-140044.png",

      },
      weeklyStart: {
        Sunday: "https://i.ibb.co.com/LtnvgG0/Screenshot-2024-11-15-190202.png",
        Monday: "https://i.ibb.co.com/RPnzdhf/Screenshot-2024-11-15-190206.png",
      },
      dailyLayout: {
       "Horizaontal Box":
        "https://i.ibb.co.com/6mrfC3N/2.png",
      "Vertical box":
        "https://i.ibb.co.com/MpgJk4r/3.png",
      "Weekly Blank":
        "https://i.ibb.co.com/bN484tb/4.png",
      "Weekly Grid":
        "https://i.ibb.co.com/30r29dp/5.png",
      "Weekly Scheduled":
        "https://i.ibb.co.com/ChRYP8V/1.png",
      "Horizontal Lined":
        "https://i.ibb.co.com/QXC8t47/6.png",
      "Vertical Lined":
        "https://i.ibb.co.com/v1mG9q1/7.png",
      "Goal Setting Horizontal":
        "https://i.ibb.co.com/1KYRN19/8.png",
      "Weekly Scheduled Grey":
        "https://i.ibb.co.com/Ns36pQd/9.png",
      "Horizaontal Box Grey":
        "https://i.ibb.co.com/fx8sHtJ/10.png",
      "Vertical Box Grey":
        "https://i.ibb.co.com/L09YZdm/11.png",
      "Weekly Blank Grey":
        "https://i.ibb.co.com/F520v2q/12.png",
      "Weekly Grid Grey":
        "https://i.ibb.co.com/Y847r03/13.png",
      "Horizontal Lined Grey":
        "https://i.ibb.co.com/Y847r03/13.png",
      "Vertical Lined Grey":
        "https://i.ibb.co.com/KFqcMxY/15.png",
      "Goal Vertical Grey":
        "https://i.ibb.co.com/bv2jBD3/16.png",
      "Goal Horizaontal Grey":
        "https://i.ibb.co.com/hZv2Mn9/17.png",
      },
      weeklyLayout : {
        "Balanced": "https://i.ibb.co.com/drgwnvg/63a97a42e4c9ebc5838d6a03-1-Balanced-p-500.jpg",
        "Half Journal": "https://i.ibb.co.com/tMvf9pm/half-j.jpg",
        "Canvas": "https://i.ibb.co.com/6vHp1mn/canvas.jpg",
        "Productivity": "https://i.ibb.co.com/6nDpnw0/pr.jpg",
        "Minimal": "https://i.ibb.co.com/x3fZ2ks/mini.jpg",
        "Manifestation": "https://i.ibb.co.com/6t99n2P/main.jpg",
        "24 Hour planner": "https://i.ibb.co.com/QkSLDJB/24.png",
        "Self Care Planner": "https://i.ibb.co.com/x54WcGb/self.jpg",
        "Priority Matrix": "https://i.ibb.co.com/3cSTKSL/prio.jpg",
        "Graph": "https://i.ibb.co.com/tcnwmVd/gr.jpg",
        "Self Care": "https://i.ibb.co.com/x54WcGb/self.jpg",
        "Journal": "https://i.ibb.co.com/wJpQzsW/jr.jpg",
        "Blank": "https://i.ibb.co.com/ZTktR0T/bl.jpg",
        "Lined & Grid": "https://i.ibb.co.com/Nym9fQP/l-G.jpg",
      },
    };

    let currentStep = 1;
    let selectedYear = null;
    let selectedColor = null;
    let selectedWeeklyStart = null;
    let selectedWeeklyLayout = null;

    const steps = document.querySelectorAll(".step");
    const colorOptionsDiv = document.getElementById("colorOptions");
    const weeklyStartOptionsDiv =
      document.getElementById("weeklyStartOptions");
    const weeklyLayoutOptionsDiv = document.getElementById(
      "weeklyLayoutOptions"
    );
    const dailyLayoutOptionsDiv =
      document.getElementById("dailyLayoutOptions");

    function showStep(step) {
      steps.forEach((stepElement, index) => {
        stepElement.style.display = index + 1 === step ? "block" : "none";
      });
    }

    // Step 1: Choose Year
    document.querySelectorAll(".year-option").forEach((button) => {
      button.addEventListener("click", () => {
        selectedYear = button.dataset.year;
        const colors = Object.keys(plannerFiles[selectedYear]);
        colorOptionsDiv.innerHTML = colors
          .map(
            (color) => `
            <div class="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-[400px] h-[380px]">
              <img src="${optionImages.colors[color]}" alt="${color}" class="mb-2 w-[350px] h-[260px]">
              <span class="font-semibold mb-2">${color}</span>
              <button class="color-option btn border border-solid border-pink-600 boreder-[1px] rounded-md p-3 text-pink-600" data-color="${color}">Choose Theme</button>
            </div>
          `
          )
          .join("");
        currentStep++;
        showStep(currentStep);
      });
    });

    // Step 2: Choose Color
    colorOptionsDiv.addEventListener("click", (event) => {
      if (event.target.classList.contains("color-option")) {
        selectedColor = event.target.dataset.color;

        const weeklyStarts = Object.keys(
          plannerFiles[selectedYear][selectedColor]
        );
        weeklyStartOptionsDiv.innerHTML = weeklyStarts
          .map(
            (start) => `
            <div class="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-[400px] h-[380px]">
              <img src="${optionImages.weeklyStart[start]}" alt="${start}" class="mb-2 w-[350px] h-[260px]">
              <span class="font-semibold mb-2">${start} Start</span>
              <button class="weekly-option btn border border-solid border-pink-600 boreder-[1px] rounded-md p-3 text-pink-600" data-weekly="${start}">Choose</button>
            </div>
          `
          )
          .join("");
        currentStep++;
        showStep(currentStep);
      }
    });

    // Step 3: Choose Weekly Start
    weeklyStartOptionsDiv.addEventListener("click", (event) => {
      if (event.target.classList.contains("weekly-option")) {
        selectedWeeklyStart = event.target.dataset.weekly;

        const weeklyLayouts = Object.keys(
          plannerFiles[selectedYear][selectedColor][selectedWeeklyStart]
        );
        weeklyLayoutOptionsDiv.innerHTML = weeklyLayouts
          .map(
            (layout) => `
            <div class="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-[400px] h-[380px]">
              <img src="${optionImages.weeklyLayout[layout]}" alt="${layout}" class="mb-2 w-[350px] h-[260px]">
              <span class="font-semibold mb-2">${layout}</span>
              <button class="weekly-layout-option btn border border-solid border-pink-600 boreder-[1px] rounded-md p-3 text-pink-600" data-layout="${layout}">Select</button>
            </div>
          `
          )
          .join("");
        currentStep++;
        showStep(currentStep);
      }
    });

    // Step 4: Choose Weekly Layout
    weeklyLayoutOptionsDiv.addEventListener("click", (event) => {
      if (event.target.classList.contains("weekly-layout-option")) {
        selectedWeeklyLayout = event.target.dataset.layout;

        const dailyLayouts =
          plannerFiles[selectedYear][selectedColor][selectedWeeklyStart][
            selectedWeeklyLayout
          ].dailyLayouts;
        dailyLayoutOptionsDiv.innerHTML = Object.entries(dailyLayouts)
          .map(
            ([layout, pdf]) => `
            <div class="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-[400px] h-[380px]">
              <img src="${optionImages.dailyLayout[layout]}" alt="${layout}" class="mb-2 w-[350px] h-[260px]">
              <span class="font-semibold mb-2">${layout}</span>
              <a href="${pdf}" class="daily-layout-option btn border border-solid border-pink-600 boreder-[1px] rounded-md p-3 text-pink-600" target="_blank">Download PDF</a>
            </div>
          `
          )
          .join("");
        currentStep++;
        showStep(currentStep);
      }
    });

    // Back Button
    document.querySelectorAll(".prev-btn").forEach((button) => {
      button.addEventListener("click", () => {
        currentStep--;
        showStep(currentStep);
      });
    });
  });
