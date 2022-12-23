class TabManager {
  constructor(rootElement, componentMapping) {
    this.rootElement = rootElement;
    this.componentMapping = componentMapping;
  }

  async openTabById(id) {
    if (id in this.componentMapping) {
      const {
        component,
        params: [...props],
      } = this.componentMapping[id];
      const Component = await component(...props);
      this.rootElement.innerHTML = "";
      this.rootElement.appendChild(Component);
    } else {
      console.error("Invalid id provided");
    }
  }
  async changeBanner(id) {
    if (id in this.componentMapping) {
      switch(id){
        case "page1":
          document.querySelector("#banner").style.display ='block'
          document.querySelector(".banner").style.backgroundImage = "url('https://www.gamespot.com/a/uploads/screen_kubrick/171/1712892/3614168-total_rickall.jpg')";
          document.querySelector(".banner-content").textContent = 'Characters'
          document.querySelector(".banner-content").style.color ='black'
          break
        case "page2":
          document.querySelector("#banner").style.display ='block'
          document.querySelector(".banner").style.backgroundImage = "url('https://i.pinimg.com/originals/5b/66/7d/5b667d877265b876259a1633403b0ec9.jpg')";
          document.querySelector(".banner-content").textContent = 'Episodes'
          document.querySelector(".banner-content").style.color ='white'
          break
        case "page3":
          document.querySelector("#banner").style.display ='block'
          document.querySelector(".banner").style.backgroundImage = "url('https://cdn.dribbble.com/users/4334000/screenshots/9179554/galaxy_illustration-thumbnail-01_4x.jpg')";
          document.querySelector(".banner-content").textContent = 'Locations'
          document.querySelector(".banner-content").style.color ='white'
          break
        case "page4":
          document.querySelector("#banner").style.display ='none'
          break
        case "page5":
          document.querySelector("#banner").style.display ='none'
      }
    }
  }
}

export default TabManager;
