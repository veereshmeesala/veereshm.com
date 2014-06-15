var paginationModule = (function(){

 
        var url, 
            ele, 
            pagingEle, 
            itemsPerPage, 
            numberOfItems = 0, 
            numberOfPages = 1, 
            currentPage = 1;

        function init(options){
                debugger;
                url = options.url;
                ele = options.eleId;
                itemsPerPage = options.itemsPerPage;
                pagingEle = options.pagingId;
                loadJsonData();
                $('#prev').on('click',  function(e){
                        e.preventDefault();
                        prevPage();
                });
                $('#next').on('click', function(e){
                        e.preventDefault();
                        nextPage();
                });
        }

        function loadJsonData(){
                //debugger;
                $.getJSON(url, function(data) {
                        debugger;
                        numberOfItems = data.items.length;
                        numberOfPages = Math.ceil(numberOfItems / itemsPerPage);
                          $.each(data.items, function(i, item) {
                               // debugger;
                              var item = $("<li>" + item.title + "</li>")
                                        .appendTo(ele);  
                          });

                          $(ele).children().hide();
                          $(ele).children().slice(0, itemsPerPage).show();
                 });

                
                setPaging();
        }

        function setPaging(){
               var pageStatus = currentPage + " of" + numberOfPages;
               $('#pagingStatus').val(pageStatus);
               debugger;
        }

        function showPage(page){
            debugger;
            currentPage = page;
            startPage = (currentPage - 1) * itemsPerPage;
            endPage = startPage + itemsPerPage;
            $(ele).children().hide().slice(startPage, endPage).show();
        }


        function nextPage(){
           if (currentPage < numberOfPages){
                showPage(currentPage + 1);
            }
            setPaging();
        }

        function prevPage(){
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
            setPaging();
        }


        return {
                init : init,
                next : nextPage,
                prev : prevPage
        }

})();