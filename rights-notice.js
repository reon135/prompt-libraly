const rightsNotice=document.createElement('aside');
rightsNotice.className='rights-notice';
rightsNotice.setAttribute('aria-label','著作権と画像操作のご案内');
rightsNotice.innerHTML='<div class="rights-notice__inner"><p class="rights-notice__copyright"><span class="rights-notice__mark" aria-hidden="true">©</span><span><strong>掲載コンテンツの著作権はレオに帰属します。</strong><small>文章・画像・図解・編集構成の無断複製、転載、再配布、改変、販売、商用利用およびAI学習素材への転用を禁じます。</small></span></p><p class="rights-notice__zoom"><span class="rights-notice__zoom-icon" aria-hidden="true">↗</span><span><strong>画像はタップして拡大</strong><small>拡大後は原寸サイズで確認できます</small></span></p></div>';
document.querySelector('.top').insertAdjacentElement('afterend',rightsNotice);
