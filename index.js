$(function addItem() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();

        let userInput = $(this).find('#shopping-list-entry').val();

        let item = $('ul').append( 
            $( `
                <li>
                    <span class="shopping-item">${userInput}</span>
                    <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                            <span class="button-label">check</span>
                        </button>
                        <button class="shopping-item-delete">
                            <span class="button-label">delete</span>
                        </button>
                </div>
                </li>
            ` ))

        $('ul').append(item);

    });
})