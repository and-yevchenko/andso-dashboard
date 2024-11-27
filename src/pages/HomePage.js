
export function HomePage() {
    const page = document.createElement('section')
    page.className = 'home-page'
    page.style.backgroundColor = 'red'

    page.innerHTML = `<h2>HOME</h2>`
    
    return page
}