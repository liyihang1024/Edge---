chrome.contextMenus.create({
    title: 'Baidu搜索', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
    }
});

chrome.contextMenus.create({
    title: 'Google搜索', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://www.google.com/search?q=' + encodeURI(params.selectionText) + '&sourceid=chrome&ie=UTF-8'});
    }
});

chrome.contextMenus.create({
    title: 'Bing搜索', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://www.bing.com/search?q=' + encodeURI(params.selectionText) + '&mkt=zh-CN'});
    }
});

// 添加分割线
chrome.contextMenus.create({
    type: 'separator',
    contexts: ['selection']
  });

chrome.contextMenus.create({
    title: 'Baidu学术搜索', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://xueshu.baidu.com/s?wd=' + encodeURI(params.selectionText) + '&rsv_bp=0&tn=SE_baiduxueshu_c1gjeupa&rsv_spt=3&ie=utf-8&f=8&rsv_sug2=0&sc_f_para=sc_tasktype%3D%7BfirstSimpleSearch%7D'});
    }
});

chrome.contextMenus.create({
    title: 'Google学术搜索', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://scholar.google.com.hk/scholar?hl=zh-CN&as_sdt=0%2C5&as_vis=1&q=' + encodeURI(params.selectionText) + '&btnG='});
    }
});

chrome.contextMenus.create({
    title: 'X-MOL搜索', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://www.x-mol.com/paper/search/q?option=' + encodeURI(params.selectionText)});
    }
});

// 添加分割线
chrome.contextMenus.create({
    type: 'separator',
    contexts: ['selection']
  });

chrome.contextMenus.create({
    title: 'Baidu翻译', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://fanyi.baidu.com/#en/zh/' + encodeURI(params.selectionText)});
    }
});

chrome.contextMenus.create({
    title: 'Google翻译', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://translate.google.com.hk/?hl=zh-CN&tab=TT&sl=en&tl=zh-CN&text=' + encodeURI(params.selectionText) + '%0A%0A&op=translate'});
    }
});

// 添加分割线
chrome.contextMenus.create({
    type: 'separator',
    contexts: ['selection']
  });

chrome.contextMenus.create({
    title: 'BiliBili搜索', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://search.bilibili.com/all?keyword=' + encodeURI(params.selectionText) + '&from_source=webtop_search&spm_id_from=333.1007'});
    }
});

chrome.contextMenus.create({
    title: 'YouTube搜索', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://www.youtube.com/results?search_query=' + encodeURI(params.selectionText)});
    }
});

// 添加分割线
chrome.contextMenus.create({
    type: 'separator',
    contexts: ['selection']
  });

chrome.contextMenus.create({
    title: 'Materials Project', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({url: 'https://materialsproject.org/#search/materials/{%22reduced_cell_formula%22%3A%22' + encodeURI(params.selectionText) + '%22}'});
    }
});
