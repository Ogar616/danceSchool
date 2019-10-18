class Nav extends React.Component {
  render() {
    return (
      <div class="menu_wrapper">
        <nav id="menu">
          <ul id="menu-main-menu-left" class="menu menu-main menu_left">
            <li class="current-menu-item">
              <a href="index-danceschool.html">
                <span>HOME</span>
              </a>
            </li>
            <li>
              <a href="content/danceschool/about.html">
                <span>O nas</span>
              </a>
            </li>
            <li>
              <a href="content/danceschool/instructors.html">
                <span>INSTRUKTORZY</span>
              </a>
            </li>
          </ul>
          <ul id="menu-main-menu-right" class="menu menu-main menu_right">
            <li>
              <a href="content/danceschool/schedule.html">
                <span>Grafik/plan</span>
              </a>
            </li>
            <li>
              <a href="content/danceschool/contact.html">
                <span>Kontakt</span>
              </a>
            </li>
            <li>
              <a href="content/danceschool/contact.html">
                <span>Blog/aktualności</span>
              </a>
            </li>
          </ul>
        </nav>
        <a class="responsive-menu-toggle" href="#">
          <i class="icon-menu-fine"></i>
        </a>
      </div>
    );
  }
}
ReactDOM.render(<Nav />, document.getElementById("nav-component"));
