
import ListOfEpisode from './src/pages/ListOfEpisode'
import ListOfUser from './src/pages/ListOfUser'
import TabManager from './src/utils/TabManager'
import ListOfLocation from './src/pages/ListOfLocation'

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfUser,
    params: [1, 'hello']
  },
  page2: {
    component: ListOfEpisode,
    params: [1, 'hello']
  },
  page3: {
    component: ListOfLocation,
    params: [1, 'hello']
  }
})


document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

tabManager.openTabById('page1')
