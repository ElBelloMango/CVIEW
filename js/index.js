$(document).ready(function () {
    // Deploy TextAreas
    $('#jobOpt').click(function () {
        $('#JobFind').collapse('show');
        $('#WorkerFind').collapse('hide');
    });
    $('#WorkerOpt').click(function () {
        $('#WorkerFind').collapse('show');
        $('#JobFind').collapse('hide');
    });

    // Deploy Login Modal
    $("#loginBtn").click(function () {
        $("#loginModal").modal('toggle');
    });

    //ToolTips
    $('#signInBtn').tooltip();
    $('#logInBtn').tooltip();

    // Deploy SignIn Modal
    $("#signInBtn").click(function () {
        $("#loginModal").modal('toggle');
        $("#signinModal").modal('toggle');
    });
    // End Sign In
    $('#signIn').click(function () {
        $("#signinModal").modal('toggle');
        $("#loginModal").modal('toggle');
    });
    // Resumee Profile
    $('#SimpleCV').click(function () {
        $('#resumeeInfo').collapse('show');
        $('#FullCvInfo').collapse('hide');
    });
    $('#FullCV').click(function () {
        $('#FullCvInfo').collapse('show');
        $('#resumeeInfo').collapse('hide');
    });

    //Login Function
    $('#logInBtn').click(function () {
        if ($('#company').is(':checked')) {
            window.location.replace('company.html')
        }
        else {
            window.location.replace('profile.html')
        }
    });
});