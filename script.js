{\rtf1\ansi\ansicpg950\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /**\
 * \uc0\u38283 \u21855 \u25351 \u23450 ID\u30340 \u24392 \u20986 \u35222 \u31383 \
 * @param \{string\} modalId - \uc0\u35201 \u38283 \u21855 \u30340 \u24392 \u20986 \u35222 \u31383 \u20803 \u32032 ID\
 */\
function openModal(modalId) \{\
    const modal = document.getElementById(modalId);\
    if (modal) \{\
        modal.style.display = 'block';\
        // \uc0\u38450 \u27490 \u32972 \u26223 \u38913 \u38754 \u28414 \u21205 \
        document.body.style.overflow = 'hidden';\
    \}\
\}\
\
/**\
 * \uc0\u38364 \u38281 \u25351 \u23450 ID\u30340 \u24392 \u20986 \u35222 \u31383 \
 * @param \{string\} modalId - \uc0\u35201 \u38364 \u38281 \u30340 \u24392 \u20986 \u35222 \u31383 \u20803 \u32032 ID\
 */\
function closeModal(modalId) \{\
    const modal = document.getElementById(modalId);\
    if (modal) \{\
        modal.style.display = 'none';\
        \
        // \uc0\u25214 \u21040 \u35222 \u31383 \u20839 \u30340 \u24433 \u29255 iframe\
        const iframe = modal.querySelector('iframe');\
        if (iframe) \{\
            // \uc0\u37325 \u26032 \u35373 \u23450 iframe\u30340 src\u65292 \u21487 \u20197 \u26377 \u25928 \u22320 \u20572 \u27490 \u24433 \u29255 \u25773 \u25918 \
            const iframeSrc = iframe.src;\
            iframe.src = iframeSrc; \
        \}\
\
        // \uc0\u27298 \u26597 \u26159 \u21542 \u36996 \u26377 \u20854 \u20182 \u24392 \u20986 \u35222 \u31383 \u26159 \u38283 \u21855 \u30340 \
        let anyModalOpen = false;\
        const allModals = document.querySelectorAll('.modal');\
        allModals.forEach(mod => \{\
            if (mod.style.display === 'block') \{\
                anyModalOpen = true;\
            \}\
        \});\
\
        // \uc0\u21482 \u26377 \u30070 \u25152 \u26377 \u24392 \u20986 \u35222 \u31383 \u37117 \u38364 \u38281 \u26178 \u65292 \u25165 \u24674 \u24489 \u32972 \u26223 \u38913 \u38754 \u30340 \u28414 \u21205 \
        if (!anyModalOpen) \{\
            document.body.style.overflow = 'auto';\
        \}\
    \}\
\}\
\
/**\
 * \uc0\u30070 \u20351 \u29992 \u32773 \u40670 \u25802 \u24392 \u20986 \u35222 \u31383 \u20197 \u22806 \u30340 \u28784 \u33394 \u21312 \u22495 \u26178 \u65292 \u38364 \u38281 \u35222 \u31383 \
 */\
window.onclick = function(event) \{\
    const allModals = document.querySelectorAll('.modal');\
    allModals.forEach(modal => \{\
        if (event.target == modal) \{\
            closeModal(modal.id);\
        \}\
    \});\
\}\
}