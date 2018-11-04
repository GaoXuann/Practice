$(function() {
    function getHero() {
        $.ajax({
            url: 'http://127.0.0.1:3001/getAllHero',
            type: 'get',
            success: function(res) {
                if (res.status === 200) {
                    let html = template('row', res);
                    $('#tbd').html(html)
                }
            }
        })
    }
    getHero()
    $('#add').on('click', function() {
        $('.ui.modal').modal('show')
    })

    // 初始化下拉框的样式
    $('.ui.dropdown').dropdown()

    $('#btnAdd').on('click', function() {
        $.ajax({
            url: 'http://127.0.0.1:3001/addhero',
            data: $('form').serialize(),
            type: 'post',
            dataType: 'json',
            success: function(result) {
                if (result.status === 200) {
                    getHero()
                }
            }
        })
    })
})