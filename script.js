/**
 * 開啟指定ID的彈出視窗
 * @param {string} modalId - 要開啟的彈出視窗元素ID
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        // 防止背景頁面滾動
        document.body.style.overflow = 'hidden';
    }
}

/**
 * 關閉指定ID的彈出視窗
 * @param {string} modalId - 要關閉的彈出視窗元素ID
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        
        // 找到視窗內的影片iframe
        const iframe = modal.querySelector('iframe');
        if (iframe) {
            // 重新設定iframe的src，可以有效地停止影片播放
            const iframeSrc = iframe.src;
            iframe.src = iframeSrc; 
        }

        // 檢查是否還有其他彈出視窗是開啟的
        let anyModalOpen = false;
        const allModals = document.querySelectorAll('.modal');
        allModals.forEach(mod => {
            if (mod.style.display === 'block') {
                anyModalOpen = true;
            }
        });

        // 只有當所有彈出視窗都關閉時，才恢復背景頁面的滾動
        if (!anyModalOpen) {
            document.body.style.overflow = 'auto';
        }
    }
}

/**
 * 當使用者點擊彈出視窗以外的灰色區域時，關閉視窗
 */
window.onclick = function(event) {
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => {
        if (event.target == modal) {
            closeModal(modal.id);
        }
    });
}
