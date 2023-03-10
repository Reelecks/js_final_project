
import ListOfEpisode from './src/pages/ListOfEpisode'
import ListOfUser from './src/pages/ListOfUser'
import OneOfUser from './src/pages/OneOfUser'
import TabManager from './src/utils/TabManager'
import ListOfLocation from './src/pages/ListOfLocation'
import ListOfSearch from './src/pages/ListOfSearch'
import searchElement from './src/utils/search'

const rootElement = document.querySelector('#app')

export const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfUser,
    params: ['','']
  },
  page2: {
    component: ListOfEpisode,
    params: ['', '']
  },
  page3: {
    component: ListOfLocation,
    params: ['', '']
  },
  page4: {
    component: ListOfSearch,
    params: ['', '']
  },
  page5: {
    component: OneOfUser,
    params: ['', '']
  }
})


document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
    tabManager.changeBanner(element.getAttribute('data-tabId'))
  })
})
tabManager.openTabById('page1')
tabManager.changeBanner('page1')

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  searchElement()
})
