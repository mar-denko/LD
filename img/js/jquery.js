function selPlaceholder(block) {
    var placeholder = block.find('.placeholder_select'),
      select = block.find('select');
    placeholder.text(placeholder.attr('data-text') + select.find('option:selected').text());
  }
  
  $('.block').each(function() {
    selPlaceholder($(this));
  });
  
  $('.block select').on('change', function() {
    selPlaceholder($(this).closest('.block'));
  });