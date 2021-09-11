$(document).ready(function() {
    users = []
    repos = []
    $(".ghbtn").each( function () {
        var user = $(this).attr('user');
        var repo = $(this).attr('repo');
        repos.push(user + '/' + repo);
        if (users.indexOf($(this).attr('user')) === -1) {
            users.push($(this).attr('user'))
        }
    })
    for (var i = 0; i < repos.length; i++) {
        $.ajax({
            type: "GET",
            url: "https://api.github.com/repos/" + repos[i],
            tryCount : 0,
            retryLimit : 3,
            async: true,
            dataType: "json",
            success: function (data) {
                x = data.name;
                $("div[repo='" + x + "']").find("span[class='star']").html("&nbsp;"+data.stargazers_count);
                $("div[repo='" + x + "']").find("span[class='fork']").html("&nbsp;"+data.forks_count);
                $("div[repo='" + x + "']").find("span[class='watchers']").html("&nbsp;"+data.subscribers_count);
            }
        })}
});
