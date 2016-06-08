// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.

var articleView = {};

articleView.populateFilters = function() {
  //select all things under the article tag, except for the template
  $('article').not('.template').each(function() {
    //address a is the anchor tag that's the child of address (check index)
    //val is the author name
    var val = $(this).find('address a').text();
    // the value of value is the author name, and the actual option will be the author name
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#author-filter').append(optionTag);

    val = $(this).attr('data-category');
    optionTag = '<option value="' + val + '">' + val + '</option>';
    if ($('#category-filter option[value="' + val + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="'+ $(this).val() +'"]').fadeIn();
      /* TODO: If the select box changes to an option that has a value, we should:
          1.) Hide all the articles,
          2.) Fade in only the articles that match based on the author that was selected. (Hint: attribute selector??? Can use square brackets to grab an attribute of a certain element  .article[data-author] selects the attribute data-author from the article) */
    } else {
      /* TODO: Otherwise, we should:
          1.) Show all the articles,
          2.) Except the one article we are using as a template */
      $('article').not('.template').show();
    }
    //if we select an author, want to empty out the category-filter selection
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should handle change events on the #category-filter element. Be sure to reset the #author-filter while you're at it!*/
};

articleView.handleMainNav = function() {
  // if we click on home, hide about section, and show home section, and vice versa
  /* TODO: Complete the delegated event handler below to help power the tabs feature.
      Clicking any .tab element should:
          1.) Hide all the .tab-content sections
          2.) Fade in the single .tab-content section that is associated with the clicked .tab element's data-content attribute. */
  $('main-nav').on(/* CODE GOES HERE*/);
  //under main nav, class tab, first element of class tab
  //the compuper will click on that element (which will display home on page load)
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function () {
  /* NOTE: this hides any elements after the first 2 (<p> tags in this case) in any article body */
  $('.article-body *:nth-of-type(n+2)').hide();

  /* TODO: Add a delegated event handler to reveal the remaining body section. When a .read-on link is clicked, we can:
      1.) Prevent the default action of the link. (will try to take you somewhere else)
      2.) Reveal everything in that particular article now.
      3.) Hide the read-on linke (Might need event delegation here)*/

  // Stretch goal: change the 'Read More' link to 'Show Less'
};

//TODO: Invoke all of the above functions (I mean methods!);
articleView.populateFilters();
articleView.handleAuthorFilter();
