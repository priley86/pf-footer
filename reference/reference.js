(function() {
  window.perf = window.perf || {};

  perf.createTab = function() {
    var wrapper = document.createElement('div');
    var ts = new Date().getTime();

    var tabs = document.createElement('ul');
    tabs.classList.add('nav');
    tabs.classList.add('nav-tabs');

    var contents = document.createElement('div');
    contents.classList.add('tab-content');

    var tab1 = document.createElement('li');
    var link1 = document.createElement('a');
    link1.innerText = 'Tab 1';
    link1.setAttribute('role', 'tab');
    link1.setAttribute('data-toggle', 'tab');
    link1.setAttribute('href', '#tab1_' + ts);
    tab1.appendChild(link1)
    tabs.appendChild(tab1);

    var p1 = document.createElement('div');
    p1.setAttribute('id', 'tab1_' + ts);
    p1.setAttribute('role', 'tabpanel');
    p1.classList.add('tab-pane');
    p1.classList.add('active');
    p1.innerText = 'Tab1 content here';
    contents.appendChild(p1);

    var tab2 = document.createElement('li');
    var link2 = document.createElement('a');
    link2.innerText = 'Tab 2';
    link2.setAttribute('role', 'tab');
    link2.setAttribute('data-toggle', 'tab');
    link2.setAttribute('href', '#tab2_' + ts);
    tab2.appendChild(link2)
    tabs.appendChild(tab2);

    var p2 = document.createElement('div');
    p2.setAttribute('id', 'tab2_' + ts);
    p2.setAttribute('role', 'tabpanel');
    p2.classList.add('tab-pane');
    p2.innerText = 'Tab2 content here';
    contents.appendChild(p2);

    wrapper.appendChild(tabs);
    wrapper.appendChild(contents);

    $(wrapper).find('a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    return wrapper;
  }
})()
