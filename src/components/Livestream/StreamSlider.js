import React from 'react';

const StreamSlider = () => {
  var LEFT_PATH =
    'M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z';
  var VIEW_BOX = '0 0 551 1024';
  var RIGHT_PATH =
    'M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z';

  function createAdvancerButton(direction) {
    var button = document.createElement('button');
    var buttonClassName = 'pn-Advancer pn-Advancer_Right';
    var svgPath = RIGHT_PATH;
    if (direction === 'left') {
      buttonClassName = 'pn-Advancer pn-Advancer_Left';
      svgPath = LEFT_PATH;
    }

    button.className = buttonClassName;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttributeNS(null, 'class', 'pn-Advancer_Icon');
    svg.setAttributeNS(null, 'viewBox', VIEW_BOX);
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', svgPath);
    svg.appendChild(path);
    button.appendChild(svg);
    return button;
  }

  function initProductNav(section_id, config) {
    var SETTINGS = config;
    SETTINGS.navBarTravelling = false;
    SETTINGS.navBarTravelDirection = '';

    var colours = {
      0: '#867100',
      1: '#7F4200',
      2: '#99813D',
      3: '#40FEFF',
      4: '#14CC99',
      5: '#00BAFF',
      6: '#0082B2',
      7: '#B25D7A',
      8: '#00FF17',
      9: '#006B49',
      10: '#00B27A',
      11: '#996B3D',
      12: '#CC7014',
      13: '#40FF8C',
      14: '#FF3400',
      15: '#ECBB5E',
      16: '#ECBB0C',
      17: '#B9D912',
      18: '#253A93',
      19: '#125FB9',
    };

    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    // Out advancer buttons
    var pnProductNav_Section = document.getElementById(section_id);
    var sectionClass = 'pn-PrdouctNav_Section';
    var pnProductNav_Header = null;

    if (SETTINGS.moreLink && SETTINGS.headerTitle && SETTINGS.moreText) {
      sectionClass = 'pn-PrdouctNav_Section pn-ProductNav_SectionHeader';
      // create header
      pnProductNav_Header = document.createElement('div');
      pnProductNav_Header.className = 'pn-ProductNav_Header';
      pnProductNav_Section.insertAdjacentElement(
        'afterbegin',
        pnProductNav_Header
      );
      // create title for header
      var pnProductNav_Title = document.createElement('div');
      pnProductNav_Title.className = 'pn-ProductNav_Title';
      var pnProductNav_TitleHeading = document.createElement('h3');
      var pnProductNav_TitleHeadingLink = document.createElement('a');
      pnProductNav_TitleHeadingLink.className = 'pn-ProductNav_MoreLink';
      pnProductNav_TitleHeadingLink.href = SETTINGS.moreLink;
      pnProductNav_TitleHeadingLink.innerText = SETTINGS.headerTitle;
      pnProductNav_TitleHeading.appendChild(pnProductNav_TitleHeadingLink);
      pnProductNav_Title.appendChild(pnProductNav_TitleHeading);
      pnProductNav_Header.appendChild(pnProductNav_Title);
      // create more link for header
      var pnProductNav_MoreLink = document.createElement('a');
      pnProductNav_MoreLink.className = 'pn-ProductNav_MoreLink';
      pnProductNav_MoreLink.href = SETTINGS.moreLink;
      pnProductNav_MoreLink.innerText = SETTINGS.moreText;
      pnProductNav_Header.appendChild(pnProductNav_MoreLink);
    }
    pnProductNav_Section.className = sectionClass;

    var pnProductNav_Wrapper = pnProductNav_Section.querySelector(
      '.pn-ProductNav_Wrapper'
    );
    if (!pnProductNav_Wrapper) {
      var pnProductNav_Wrapper = document.createElement('div');
      pnProductNav_Wrapper.className = 'pn-ProductNav_Wrapper';
      pnProductNav_Section.appendChild(pnProductNav_Wrapper);
    }
    var pnProductNav = pnProductNav_Wrapper.querySelector('.pn-ProductNav');
    if (!pnProductNav) {
      var pnProductNav = document.createElement('nav');
      pnProductNav.className = 'pn-ProductNav dragscroll nochilddrag';
      pnProductNav_Wrapper.appendChild(pnProductNav);
    }
    var pnAdvancerLeft = pnProductNav_Wrapper.querySelector(
      '.pn-Advancer_Left'
    );
    if (!pnAdvancerLeft) {
      pnAdvancerLeft = createAdvancerButton('left');
      pnProductNav_Wrapper.appendChild(pnAdvancerLeft);
    }
    var pnAdvancerRight = pnProductNav_Wrapper.querySelector(
      '.pn-Advancer_Right'
    );
    if (!pnAdvancerRight) {
      pnAdvancerRight = createAdvancerButton('right');
      pnProductNav_Wrapper.appendChild(pnAdvancerRight);
    }

    var pnProductNavContents = pnProductNav.querySelector(
      '.pn-ProductNav_Contents'
    );
    if (!pnProductNavContents) {
      var pnProductNavContents = document.createElement('div');
      pnProductNavContents.className = 'pn-ProductNav_Contents';
      pnProductNav.appendChild(pnProductNavContents);
    }
    if (SETTINGS.content) {
      pnProductNavContents.innerHTML = '';
      SETTINGS.content.forEach(function (item) {
        item.classList.add('pn-ProductNav_Link');
        pnProductNavContents.appendChild(item);
      });
    }
    if (SETTINGS.moreLink && SETTINGS.moreText) {
      var moreLink = document.createElement('a');
      moreLink.className = 'pn-ProductNav_Link pn-ProductNav_MoreLink';
      moreLink.href = SETTINGS.moreLink;
      moreLink.innerText = SETTINGS.moreText + ' ➔';
      pnProductNavContents.appendChild(moreLink);
    }

    // the indicator
    var pnIndicator = pnProductNavContents.querySelector(
      '.pn-ProductNav_Indicator'
    );
    if (!pnIndicator) {
      pnIndicator = document.createElement('span');
      pnIndicator.className = 'pn-ProductNav_Indicator';
      pnProductNavContents.appendChild(pnIndicator);
    }

    SETTINGS.navBarTravelDistance = pnProductNav_Wrapper.clientWidth;

    window.addEventListener('resize', function () {
      SETTINGS.navBarTravelDistance = pnProductNav_Wrapper.clientWidth;
    });

    pnProductNav.setAttribute(
      'data-overflowing',
      determineOverflow(pnProductNavContents, pnProductNav)
    );

    // Set the indicator
    //moveIndicator(pnProductNav.querySelector("[aria-selected=\"true\"]"), colours[0]);

    // Handle the scroll of the horizontal container
    var last_known_scroll_position = 0;
    var ticking = false;

    function doSomething(scroll_pos) {
      pnProductNav.setAttribute(
        'data-overflowing',
        determineOverflow(pnProductNavContents, pnProductNav)
      );
    }

    pnProductNav.addEventListener('scroll', function () {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });

    function navLeft() {
      // If in the middle of a move return
      if (SETTINGS.navBarTravelling === true) {
        return;
      }
      // If we have content overflowing both sides or on the left
      if (
        determineOverflow(pnProductNavContents, pnProductNav) === 'left' ||
        determineOverflow(pnProductNavContents, pnProductNav) === 'both'
      ) {
        // Find how far this panel has been scrolled
        var availableScrollLeft = pnProductNav.scrollLeft;
        // If the space available is less than two lots of our desired distance, just move the whole amount
        // otherwise, move by the amount in the settings
        if (availableScrollLeft < SETTINGS.navBarTravelDistance) {
          pnProductNavContents.style.transform =
            'translateX(' + availableScrollLeft + 'px)';
        } else {
          pnProductNavContents.style.transform =
            'translateX(' + SETTINGS.navBarTravelDistance + 'px)';
        }
        // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
        pnProductNavContents.classList.remove(
          'pn-ProductNav_Contents-no-transition'
        );
        // Update our settings
        SETTINGS.navBarTravelDirection = 'left';
        SETTINGS.navBarTravelling = true;
      }
      // Now update the attribute in the DOM
      pnProductNav.setAttribute(
        'data-overflowing',
        determineOverflow(pnProductNavContents, pnProductNav)
      );
    }

    function navRight() {
      // If in the middle of a move return
      if (SETTINGS.navBarTravelling === true) {
        return;
      }
      // If we have content overflowing both sides or on the right
      if (
        determineOverflow(pnProductNavContents, pnProductNav) === 'right' ||
        determineOverflow(pnProductNavContents, pnProductNav) === 'both'
      ) {
        // Get the right edge of the container and content
        var navBarRightEdge = pnProductNavContents.getBoundingClientRect()
          .right;
        var navBarScrollerRightEdge = pnProductNav.getBoundingClientRect()
          .right;
        // Now we know how much space we have available to scroll
        var availableScrollRight = Math.floor(
          navBarRightEdge - navBarScrollerRightEdge
        );
        // If the space available is less than two lots of our desired distance, just move the whole amount
        // otherwise, move by the amount in the settings
        if (availableScrollRight < SETTINGS.navBarTravelDistance) {
          pnProductNavContents.style.transform =
            'translateX(-' + availableScrollRight + 'px)';
        } else {
          pnProductNavContents.style.transform =
            'translateX(-' + SETTINGS.navBarTravelDistance + 'px)';
        }
        // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
        pnProductNavContents.classList.remove(
          'pn-ProductNav_Contents-no-transition'
        );
        // Update our settings
        SETTINGS.navBarTravelDirection = 'right';
        SETTINGS.navBarTravelling = true;
      }
      // Now update the attribute in the DOM
      pnProductNav.setAttribute(
        'data-overflowing',
        determineOverflow(pnProductNavContents, pnProductNav)
      );
    }

    pnAdvancerLeft.addEventListener('click', navLeft);
    pnAdvancerRight.addEventListener('click', navRight);

    pnProductNav.onkeydown = function (evt) {
      evt = evt || window.event;
      switch (evt.keyCode) {
        case 37:
          navLeft();
          break;
        case 39:
          navRight();
          break;
      }
    };

    pnProductNavContents.addEventListener(
      'transitionend',
      function () {
        // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
        var styleOfTransform = window.getComputedStyle(
          pnProductNavContents,
          null
        );
        var tr =
          styleOfTransform.getPropertyValue('-webkit-transform') ||
          styleOfTransform.getPropertyValue('transform');
        // If there is no transition we want to default to 0 and not null
        var amount = Math.abs(parseInt(tr.split(',')[4]) || 0);
        pnProductNavContents.style.transform = 'none';
        pnProductNavContents.classList.add(
          'pn-ProductNav_Contents-no-transition'
        );
        // Now lets set the scroll position
        if (SETTINGS.navBarTravelDirection === 'left') {
          pnProductNav.scrollLeft = pnProductNav.scrollLeft - amount;
        } else {
          pnProductNav.scrollLeft = pnProductNav.scrollLeft + amount;
        }
        SETTINGS.navBarTravelling = false;
      },
      false
    );

    // Handle setting the currently active link
    pnProductNavContents.addEventListener('click', function (e) {
      var links = [].slice.call(
        document.querySelectorAll('.pn-ProductNav_Link')
      );
      links.forEach(function (item) {
        item.setAttribute('aria-selected', 'false');
      });
      e.target.setAttribute('aria-selected', 'true');
      // Pass the clicked item and it's colour to the move indicator function
      moveIndicator(e.target, colours[links.indexOf(e.target)]);
      if (e.target.nodeName === 'A') {
        if (
          e.target.parentElement.parentElement.classList.contains('dragging')
        ) {
          e.preventDefault();
        }
      }
    });

    // var count = 0;
    function moveIndicator(item, color) {
      var textPosition = item.getBoundingClientRect();
      var container = pnProductNavContents.getBoundingClientRect().left;
      var distance = textPosition.left - container;
      var scroll = pnProductNavContents.scrollLeft;
      pnIndicator.style.transform =
        'translateX(' +
        (distance + scroll) +
        'px) scaleX(' +
        textPosition.width * 0.01 +
        ')';
      // count = count += 100;
      // pnIndicator.style.transform = "translateX(" + count + "px)";

      if (color) {
        pnIndicator.style.backgroundColor = color;
      }
    }

    function determineOverflow(content, container) {
      var containerMetrics = container.getBoundingClientRect();
      var containerMetricsRight = Math.floor(containerMetrics.right);
      var containerMetricsLeft = Math.floor(containerMetrics.left);
      var contentMetrics = content.getBoundingClientRect();
      var contentMetricsRight = Math.floor(contentMetrics.right);
      var contentMetricsLeft = Math.floor(contentMetrics.left);
      if (
        containerMetricsLeft > contentMetricsLeft &&
        containerMetricsRight < contentMetricsRight
      ) {
        return 'both';
      } else if (contentMetricsLeft < containerMetricsLeft) {
        return 'left';
      } else if (contentMetricsRight > containerMetricsRight) {
        return 'right';
      } else {
        return 'none';
      }
    }
  }

  /**
   * @fileoverview dragscroll - scroll area by dragging
   * @version 0.0.8
   *
   * @license MIT, see https://github.com/asvd/dragscroll
   * @copyright 2015 asvd <heliosframework@gmail.com>
   */

  (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
      factory(exports);
    } else {
      factory((root.dragscroll = {}));
    }
  })(this, function (exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add' + EventListener;
    var removeEventListener = 'remove' + EventListener;
    var newScrollX, newScrollY;

    var dragged = [];
    var reset = function (i, el) {
      for (i = 0; i < dragged.length; ) {
        el = dragged[i++];
        el = el.container || el;
        el[removeEventListener](mousedown, el.md, 0);
        _window[removeEventListener](mouseup, el.mu, 0);
        _window[removeEventListener](mousemove, el.mm, 0);
      }

      // cloning into array since HTMLCollection is updated dynamically
      dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
      for (i = 0; i < dragged.length; ) {
        (function (el, lastClientX, lastClientY, pushed, scroller, cont) {
          (cont = el.container || el)[addEventListener](
            mousedown,
            (cont.md = function (e) {
              if (
                !el.hasAttribute('nochilddrag') ||
                _document.elementFromPoint(e.pageX, e.pageY) == cont
              ) {
                pushed = 1;
                lastClientX = e.clientX;
                lastClientY = e.clientY;

                e.preventDefault();
              }
            }),
            0
          );

          _window[addEventListener](
            mouseup,
            (cont.mu = function () {
              pushed = 0;
              setTimeout(function () {
                el.classList.remove('dragging');
              }, 100);
            }),
            0
          );

          _window[addEventListener](
            mousemove,
            (cont.mm = function (e) {
              if (pushed) {
                el.classList.add('dragging');
                (scroller = el.scroller || el).scrollLeft -= newScrollX =
                  -lastClientX + (lastClientX = e.clientX);
                // scroller.scrollTop -=
                //     newScrollY = (- lastClientY + (lastClientY=e.clientY));
                if (el == _document.body) {
                  (scroller =
                    _document.documentElement).scrollLeft -= newScrollX;
                  //scroller.scrollTop -= newScrollY;
                }
              }
            }),
            0
          );
        })(dragged[i++]);
      }
    };

    if (_document.readyState == 'complete') {
      reset();
    } else {
      _window[addEventListener]('load', reset, 0);
    }

    exports.reset = reset;
  });

  var item_names = [
    'Chairs',
    'Tables',
    'Cookware',
    'Beds',
    'Desks',
    'Flooring',
    'Lighting',
    'Mattresses',
    'Solar Panels',
    'Bookcases',
    'Mirrors',
    'Curtains',
  ];
  var items = item_names.map(function (item_name) {
    var item = document.createElement('a');
    item.href = '#';
    item.className = 'slider-card';
    item.innerHTML = item_name;
    return item;
  });

  var default_config = {
    navBarTravelDistance: 150,
    content: items,
    moreLink: '#',
    headerTitle: 'Related Categories',
    moreText: 'See All',
  };

  initProductNav('productNavSection0', default_config);
  //initProductNav('productNav1', default_config)
  //initProductNav('productNav2', default_config)
  //initProductNav('productNav3', default_config)

  return <React.Fragment></React.Fragment>;
};

export default StreamSlider;
