// Type definitions for Framework7 1.4.2

/**
 *FrameWork7 初始化参数
 */
interface FrameWork7Params {
    cache?: boolean;
    cacheIgnore?: any[];
    cacheIgnoreGetParameters?: boolean;
    cacheDuration?: Number; // Ten minutes
    preloadPreviousPage?: boolean;
    uniqueHistory?: boolean;
    uniqueHistoryIgnoreGetParameters?: boolean;
    dynamicPageUrl?: string;
    allowDuplicateUrls?: boolean;
    router?: boolean;
    // Push State
    pushState?: boolean;
    pushStateRoot?: any;
    pushStateNoAnimation?: boolean;
    pushStateSeparator?: string;
    pushStateOnLoad?: boolean;
    // Fast clicks
    fastClicks?: boolean;
    fastClicksDistanceThreshold?: number;
    fastClicksDelayBetweenClicks?: number;
    // Tap Hold
    tapHold?: boolean;
    tapHoldDelay?: number;
    tapHoldPreventClicks?: boolean;
    // Active State
    activeState?: boolean;
    activeStateElements?: string;
    // Animate Nav Back Icon
    animateNavBackIcon?: boolean;
    // Swipe Back
    swipeBackPage?: boolean;
    swipeBackPageThreshold?: number;
    swipeBackPageActiveArea?: number;
    swipeBackPageAnimateShadow?: boolean;
    swipeBackPageAnimateOpacity?: boolean;
    // Ajax
    ajaxLinks?: any; // or CSS selector
    // External Links
    externalLinks?: string; // CSS selector
    // Sortable
    sortable?: boolean;
    // Scroll toolbars
    hideNavbarOnPageScroll?: boolean;
    hideToolbarOnPageScroll?: boolean;
    hideTabbarOnPageScroll?: boolean;
    showBarsOnPageScrollEnd?: boolean;
    showBarsOnPageScrollTop?: boolean;
    // Swipeout
    swipeout?: boolean;
    swipeoutActionsNoFold?: boolean;
    swipeoutNoFollow?: boolean;
    // Smart Select Back link template
    smartSelectOpenIn?: string; // or 'popup' or 'picker'
    smartSelectBackText?: string;
    smartSelectPopupCloseText?: string;
    smartSelectPickerCloseText?: string;
    smartSelectSearchbar?: boolean;
    smartSelectBackOnSelect?: boolean;
    // Tap Navbar or Statusbar to scroll to top
    scrollTopOnNavbarClick?: boolean;
    scrollTopOnStatusbarClick?: boolean;
    // Panels
    swipePanel?: boolean; // or 'left' or 'right'
    swipePanelActiveArea?: number;
    swipePanelCloseOpposite?: boolean;
    swipePanelOnlyClose?: boolean;
    swipePanelNoFollow?: boolean;
    swipePanelThreshold?: number;
    panelsCloseByOutside?: boolean;
    // Modals
    modalButtonOk?: string;
    modalButtonCancel?: string;
    modalUsernamePlaceholder?: string;
    modalPasswordPlaceholder?: string;
    modalTitle?: string;
    modalCloseByOutside?: boolean;
    actionsCloseByOutside?: boolean;
    popupCloseByOutside?: boolean;
    modalPreloaderTitle?: string;
    modalStack?: boolean;
    // Lazy Load
    imagesLazyLoadThreshold?: number;
    imagesLazyLoadSequential?: boolean;
    // Name space
    viewClass?: string;
    viewMainClass?: string;
    viewsClass?: string;
    // Notifications defaults
    notificationCloseOnClick?: boolean;
    notificationCloseIcon?: boolean;
    notificationCloseButtonText?: string;
    // Animate Pages
    animatePages?: boolean;
    // Template7
    templates?: any,
    template7Data?: any,
    template7Pages?: boolean;
    precompileTemplates?: boolean;
    // Material
    material?: boolean;
    materialPageLoadDelay?: number
    materialPreloaderSvg?: any;
    materialPreloaderHtml?: any;
    materialRipple?: boolean;
    materialRippleElements?: any;
    // Auto init
    init?: boolean;
}

interface ViewsParams {
    dynamicNavbar?: boolean;
    domCache?: boolean;
    linksView?: boolean;
    reloadPages?: boolean;
    uniqueHistory?: any;
    uniqueHistoryIgnoreGetParameters?: any;
    allowDuplicateUrls?: any;
    swipeBackPage?: any;
    swipeBackPageAnimateShadow?: any;
    swipeBackPageAnimateOpacity?: any;
    swipeBackPageActiveArea?: any;
    swipeBackPageThreshold?: any;
    animatePages?: any;
    preloadPreviousPage?: any;
}

interface Router {
    load: (options?: any) => any;
    back: (options?: any) => any;
    loadPage: (options?: any) => any;
    loadContent: (options?: any) => any;
    reloadPage: (options?: any) => any;
    reloadContent: (options?: any) => any;
    reloadPreviousPage: (options?: any) => any;
    reloadPreviousContent: (options?: any) => any;
    refreshPage: () => any;
    refreshPreviousPage: () => any;

    //app router
    findElement: (selector, container, view, notCached) => any;
    animatePages: (leftPage, rightPage, direction, view) => any;
    prepareNavbar: (newNavbarInner, oldNavbarInner, newNavbarPosition) => any;
    animateNavbars: (leftNavbarInner, rightNavbarInner, direction, view) => any;
    preprocess: (view, content, url, next) => any;
    preroute: (view, options) => any;
    template7Render: (view, options) => any;
    afterBack: (view, oldPage, newPage) => any;
}

interface View {
    new (selector, params): View;
    main?: boolean;
    contentCache?: any;
    pagesCache?: any;
    pagesContainer?: any;
    initialPages?: any[];
    initialPagesUrl?: any[];
    initialNavbars?: any[];
    allowPageChange?: boolean;
    history?: any[];
    activePage?: any;
    url?: string;

    handleTouchStart: (e) => any;
    handleTouchMove: (e) => any;
    handleTouchEnd: (e) => any;
    attachEvents: (detach) => any;
    detachEvents: (e) => any;

    router: Router;
    back: (options?: any) => any;
    loadPage: (options?: any) => any;
    loadContent: (options?: any) => any;
    reloadPage: (options?: any) => any;
    reloadContent: (options?: any) => any;
    reloadPreviousPage: (options?: any) => any;
    reloadPreviousContent: (options?: any) => any;
    refreshPage: () => any;
    refreshPreviousPage: () => any;

    hideNavbar: () => any;
    showNavbar: () => any;
    hideToolbar: () => any;
    showToolbar: () => any;

    destroy: () => void;

}

interface AjaxOptins {
    method?: string;
    data?: any;
    async?: boolean;
    cache?: boolean;
    user?: string;
    password?: string;
    headers?: any;
    xhrFields?: any;
    statusCode?: any;
    processData?: boolean;
    dataType?: string;
    contentType?: string;
    timeout?: number;
    success?: any;
}

interface Dom7 {
    [index: number]: Dom7;
    addClass: (className) => Dom7;
    removeClass: (className) => Dom7;
    hasClass: (className) => boolean;
    toggleClass: (className) => Dom7;
    attr: (attrs, value?) => any;
    removeAttr: (attr) => Dom7;
    prop: (props, value) => any;
    data: (key, value) => any;
    removeData: (key) => any;
    dataset: (el?) => any;
    val(): string;
    val(str: string): Dom7;
    transform: (transform) => any;
    transition: (duration) => any;
    on: (eventName, targetSelector, listener?, capture?) => any;
    off: (eventName, targetSelector, listener?, capture?) => any;
    once: (eventName, targetSelector, listener?, capture?) => any;
    trigger: (eventName, eventData) => any;
    transitionEnd: (callback) => any;
    animationEnd: (callback) => any;

    length?: number;

    //// Sizing/Styles
    width: () => any;
    outerWidth: (includeMargins) => any;
    height: () => any;
    outerHeight: (includeMargins) => any;
    offset: () => any;
    hide: () => any;
    show: () => any;
    styles: () => any;
    css: (props, value) => any;

    //Dom manipulation
    each: (obj,callback) => any;
    filter: (callback) => any;
    html(html: string | Dom7): Dom7;
    text(): string;
    text(info: string): Dom7;
    is: (selector) => any;
    indexOf: (el) => any;
    index: () => any;
    eq: (index) => any;
    append: (newChild) => Dom7;
    appendTo: (parent) => Dom7;
    prepend: (newChild) => Dom7;
    prependTo: (parent) => Dom7;
    insertBefore: (selector) => void;
    insertAfter: (selector) => void;
    next: (selector) => Dom7;
    nextAll: (selector) => Dom7;
    prev: (selector) => Dom7;
    prevAll: (selector) => Dom7;
    parent: (selector?) => Dom7;
    parents: (selector) => Dom7;
    closest: (selector) => Dom7;
    find: (selector) => Dom7;
    children: (selector?) => Dom7;
    remove: () => Dom7;
    detach: () => Dom7;
    add: () => Dom7;

    //Shortcuts
    click: (targetSelector?, listener?, capture?) => Dom7;
    blur: (targetSelector?, listener?, capture?) => Dom7;
    focus: (targetSelector?, listener?, capture?) => Dom7;
    focusin: (targetSelector?, listener?, capture?) => Dom7;
    focusout: (targetSelector?, listener?, capture?) => Dom7;
    keyup: (targetSelector?, listener?, capture?) => Dom7;
    keypress: (targetSelector?, listener?, capture?) => Dom7;
    submit: (targetSelector?, listener?, capture?) => Dom7;
    change: (targetSelector?, listener?, capture?) => Dom7;
    mousedown: (targetSelector?, listener?, capture?) => Dom7;
    mousemove: (targetSelector?, listener?, capture?) => Dom7;
    mouseup: (targetSelector?, listener?, capture?) => Dom7;
    mouseenter: (targetSelector?, listener?, capture?) => Dom7;
    mouseleave: (targetSelector?, listener?, capture?) => Dom7;
    mouseout: (targetSelector?, listener?, capture?) => Dom7;
    mouseover: (targetSelector?, listener?, capture?) => Dom7;
    touchstart: (targetSelector?, listener?, capture?) => Dom7;
    touchend: (targetSelector?, listener?, capture?) => Dom7;
    touchmove: (targetSelector?, listener?, capture?) => Dom7;
    resize: (targetSelector?, listener?, capture?) => Dom7;
    scroll: (targetSelector?, listener?, capture?) => Dom7;
}

interface Dom7Factory {
    new (arr): Dom7;
    (selector, context?): Dom7;

    //ajax
    ajaxSetup: (options) => any;
    ajax: (options) => any;
    get: (url, data, success) => any;
    post: (url, data, success) => any;
    getJSON: (url, data, success) => any;

    //DOM Library Utilites
    parseUrlQuery: (url) => any;
    isArray: (arr) => boolean;
    each: (obj, callback) => any;
    unique: (arr) => any[];
    serializeObject: (obj, parents) => string;
    toCamelCase: (string) => string;
    dataset: (el) => any;
    getTranslate: (el, axis) => any;
    requestAnimationFrame: (callback) => any;
    cancelAnimationFrame: (id) => any;
    supportTouch?: boolean;
    scrollTo: (left, top, duration, easing, callback) => any;
    scrollTop: (top, duration, easing, callback) => any;
    scrollLeft: (left, duration, easing, callback) => any;
}

interface Page {
    name?: string;
    url?: string;
    query?: string;
    view?: View;
    container?: any;
    from?: any;
    navbarInnerContainer?: any;
    swipeBack?: boolean;
    context?: any;
    fromPage?: any;
}

/**
 * Framework7
 */
interface Framework7 {
    version: string;
    views: View[];
    addView: (selector: string, params?: ViewsParams) => View;
    getCurrentView: (index) => any;

    //Navbars && Toolbars
    navbarInitCallback: (view: View, pageContainer, navbarContainer, navbarInnerContainer) => any;
    navbarRemoveCallback: (view: View, pageContainer, navbarContainer, navbarInnerContainer) => any;
    initNavbar: (navbarContainer, navbarInnerContainer) => any;
    reinitNavbar: (navbarContainer, navbarInnerContainer) => any;
    initNavbarWithCallback: (navbarContainer) => any;
    sizeNavbars: (viewContainer) => any;
    hideNavbar: (navbarContainer) => any;
    showNavbar: (navbarContainer) => any;
    hideToolbar: (toolbarContainer) => any;
    showToolbar: (toolbarContainer) => any;

    //Searchbar
    searchbar: (container, params) => any;
    initSearchbar: (container) => any;

    //Messagebar
    messagebar: (container, params) => any;
    initPageMessagebar: (pageContainer) => any;

    //XHR
    cache?: any[];
    removeFromCache: (url) => any;
    xhr?: boolean;
    get: (url, view, ignoreCache, callback) => any;

    //Pages
    pageCallbacks?: any[];
    onPage: (callbackName, pageName, callback) => any;
    triggerPageCallbacks: (callbackName, pageName, pageData) => any;
    pageInitCallback: (view, params) => any;
    pageRemoveCallback: (view, pageContainer, position) => any;
    pageBackCallback: (callback, view, params) => any;
    pageAnimCallback: (callback, view, params) => any;
    initPage: (pageContainer) => any;
    reinitPage: (pageContainer) => any;
    initPageWithCallback: (pageContainer) => any;

    //Navigation / Router
    router?: Router;

    //Modals
    modalStack?: any[];
    modalStackClearQueue: () => any;
    modal: (params) => any;
    alert: (text, title?, callbackOk?) => any;
    confirm: (text, title, callbackOk, callbackCancel) => any;
    prompt: (text, title, callbackOk, callbackCancel) => any;
    modalLogin: (text, title, callbackOk, callbackCancel) => any;
    modalPassword: (text, title, callbackOk, callbackCancel) => any;
    showPreloader: (title) => any;
    hidePreloader: () => any;
    showIndicator: () => any;
    hideIndicator: () => any;

    //Action Sheet
    actions: (target?, params?) => any;
    popover: (modal?, target?, removeOnClose?) => any;
    popup: (modal?, removeOnClose?) => any;
    pickerModal: (modal?, removeOnClose?) => any;
    loginScreen: (modal) => any;
    openModal: (modal) => any;
    closeModal: (modal) => any;

    //Progress Bar
    setProgressbar: (container, progress, speed) => any;
    showProgressbar: (container, progress, color) => any;
    hideProgressbar: (container) => any;
    initPageProgressbar: (pageContainer) => any;

    //Panels
    allowPanelOpen?: boolean;
    openPanel: (panelPosition) => any;
    closePanel: () => any;

    //Swipe panels
    initSwipePanels: () => any;

    //Image Lazy Loading
    initImagesLazyLoad: (pageContainer) => any;
    destroyImagesLazyLoad: (pageContainer) => any;
    reinitImagesLazyLoad: (pageContainer) => any;

    //Material Preloader
    initPageMaterialPreloader: (pageContainer) => any;

    //Messages
    messages: (container, params) => any;
    initPageMessages: (pageContainer) => any;

    //Swipeout Actions (Swipe to delete)
    swipeoutOpenedEl?: any;
    allowSwipeout?: boolean;
    initSwipeout: (swipeoutEl) => any;
    swipeoutOpen: (el, dir, callback) => any;
    swipeoutClose: (el, callback) => any;
    swipeoutDelete: (el, callback) => any;

    //Sortable
    sortableToggle: (sortableContainer) => any;
    sortableOpen: (sortableContainer) => any;
    sortableClose: (sortableContainer) => any;
    initSortable: () => any;

    //Smart Select
    initSmartSelects: (pageContainer) => any;
    smartSelectAddOption: (select, option, index) => any;
    smartSelectOpen: (smartSelect, reLayout) => any;

    //Virtual List
    virtualList: (listBlock, params) => any;
    reinitVirtualList: (pageContainer) => any;

    //Pull To Refresh
    initPullToRefresh: (pageContainer) => any;
    pullToRefreshDone: (container) => any;
    pullToRefreshTrigger: (container) => any;
    destroyPullToRefresh: (pageContainer) => any;

    //Infinite Scroll
    attachInfiniteScroll: (infiniteContent) => any;
    detachInfiniteScroll: (infiniteContent) => any;
    initPageInfiniteScroll: (pageContainer) => any;

    //Hide/show Toolbar/Navbar on scroll
    initPageScrollToolbars: (pageContainer) => any;
    destroyScrollToolbars: (pageContainer) => any;

    //Material Tabbar
    materialTabbarSetHighlight: (tabbar, activeLink) => any;
    initPageMaterialTabbar: (pageContainer) => any;

    //Tabs
    showTab: (tab, tabLink, force) => any;

    //Accordion
    accordionToggle: (item) => any;
    accordionOpen: (item) => any;
    accordionClose: (item) => any;

    //Fast Clicks
    initFastClicks: () => any;

    //Handle clicks and make them fast (on tap);
    initClickEvents: () => any;

    //App Resize Actions 
    initResize: () => any;
    resize: () => any;
    orientationchange: () => any;

    //Store and parse forms data 
    formsData?: any;
    formStoreData: (formId, formJSON) => any;
    formDeleteData: (formId) => any;
    formGetData: (formId) => any;
    formToJSON: (form) => any;
    formFromJSON: (form, formData) => any;
    initFormsStorage: (pageContainer) => any;

    //Resizable textarea
    resizeTextarea: (textarea) => any;
    resizableTextarea: (textarea) => any;
    destroyResizableTextarea: (pageContainer) => any;
    initPageResizableTextarea: (pageContainer) => any;

    //Material Text Inputs
    initPageMaterialInputs: (pageContainer) => any;
    //Material Focus Inputs
    initMaterialWatchInputs: () => any;

    //Handle Browser's History
    pushStateQueue?: any[];
    pushStateClearQueue: () => any;
    initPushState: () => any;

    //Framework7 Swiper Additions
    swiper: (container, params) => any;
    initPageSwiper: (pageContainer) => any;
    reinitPageSwiper: (pageContainer) => any;

    //Photo Browser
    photoBrowser: (params) => any;

    //Autocomplete
    autocomplete: (params) => any;

    //picker
    picker: (params) => any;

    //calendar
    calendar: (params) => any;

    //Notifications
    addNotification: (params) => any;
    closeNotification: (item) => any;

    // Compile Template7 Templates On AppInit
    initTemplate7Templates: () => any;

    //Plugins API
    initPlugins: () => any;
    pluginHook: (hook) => any;
    pluginPrevent: (action) => any;
    pluginProcess: (process, data) => any;

    //App Init
    init: () => any;

    //Device/OS Detection
    device: () => any;
    //Features Support Detection
    support: () => any;

}

interface Framework7Factory {
    new (params?: FrameWork7Params): Framework7;
    $: Dom7Factory
}

declare var Framework7: Framework7Factory;
declare module "FrameWork7" {
    export = Framework7;
} 