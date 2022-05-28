const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filters_active')
        })
        target.classList.add('filters_active')

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

menu.addEventListener('click', function() {
    navlist.classList.toggle("active");
});

window.onscoll = () => {
    navlist.classList.remove("active");
}