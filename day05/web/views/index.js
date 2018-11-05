$(function() {

    //获取全部英雄
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
        //点击按钮弹出弹出框
    $('#add').on('click', function() {
        $('.ui.modal').modal('show')
    })

    // 初始化下拉框的样式
    $('.ui.dropdown').dropdown()

    //添加英雄
    $('#btnAdd').on('click', function() {
        var a = $('form').serialize();
        console.log(a)
        $.ajax({
            url: 'http://127.0.0.1:3001/addHero',
            data: $('form').serialize(),
            type: 'post',
            dataType: 'json',
            success: function(result) {
                // consol
                if (result.status === 200) {
                    getHero()
                }
            }
        })
    })
})