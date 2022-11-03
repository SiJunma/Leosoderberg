$(document).ready(function () {
  /*Popup Menu functional START*/
  function popupContent(btn, content) {
    $(btn).on("click", function (evt) {
      evt.preventDefault();
      evt.stopPropagation();

      if (!$(content).hasClass("opened")) {
        $(content).addClass("opened");
        $(btn).addClass("opened");
        $(document).bind("click", handler);
      } else if ($(content).hasClass("opened")) {
        $(content).removeClass("opened");
        $(btn).removeClass("opened");
        $(document).unbind("click", handler);
      }
    });

    let handler = function (e) {
      if (
        $(e.target).closest(content).length === 0 &&
        $(e.target).closest(btn).length === 0
      ) {
        e.stopPropagation();
        $(content).removeClass("opened");
        $(btn).removeClass("opened");
        $(document).unbind("click", handler);
      }
    };
  }
  popupContent(".js-search-btn", ".js-search-content");
  popupContent("#burgerBtn", "#mobileMenu");
  /*Popup Menu functional END*/

  // Apple height var START
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
  // Apple height var END

  //BG NAV to top START
  function stickyNav(target) {
    if ($(window).scrollTop() > 10) {
      $(target).addClass("fixed");
    }

    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll > 10) {
        $(target).addClass("fixed");
      } else {
        $(target).removeClass("fixed");
      }
    });
  }
  stickyNav(".nav_home");
  //BG NAV to top END
});
