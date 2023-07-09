$(document).ready(function () {
  // JS for navigation bar and navigation menu -----------------------
  $(".menu").click(function () {
    $(".sidemenu").css("left", "0");
    $(".searchIcon").hide();
    $(".cateBtn").hide();
    $(".menu").hide();
    $(".social").hide();
    $(".closeBox").show();
    $("body").css("height", "100vh");
    $("body").css("overflow", "hidden");
  });

  // js for closing button of navigation menu and search box ---------------------
  $(".closeBox").click(function () {
    $(".sidemenu").css("left", "-100%");
    $(".menu").show();
    $(".social").show();
    $(".cateBtn").show();
    $(".closeBox").hide();
    $(".searchIcon").show();
    $(".searchBox").css("right", "-100%");
    $("body").css("height", "100%");
    $("body").css("overflow", "auto");
    $(".formWidth").removeClass("moveToTop");
  });

  // JS for moving the search bar from center to top on focus -----------------
  $(".formWidth").click(function () {
    $(".formWidth").addClass("moveToTop");
  });
  $(".searchIcon").click(function () {
    $(".searchBox").css("right", "0");
    $(".searchIcon").hide();
    $(".cateBtn").hide();
    $(".menu").hide();
    $(".social").hide();
    $(".closeBox").show();
    $("body").css("height", "100vh");
    $("body").css("overflow", "hidden");
  });
  $(".cateBtn").click(function () {
    $(".cateList").slideToggle(400);
  });
  $(".listItem").click(function () {
    $(".cateList").slideUp(200);
  });

  // JS for footer categories buttons to go to top ------------------
  $(".footerCategory").click(function () {
    $(".cateList").slideUp(200);
  });

  // JS for to down button on home page to scroll the page a little bit down ------------
  $(".toDown").click(function () {
    document.body.scrollTop = 900;
    document.documentElement.scrollTop = 900;
  });

  // JS to close the subscribe popup -----------------------
  $(".closeSub").click(function () {
    $(".subBox").hide();
    $("body").css("height", "100%");
    $("body").css("overflow", "auto");
  });

  // JS for popping up the subscribe popup ----------------------
  setTimeout(function () {
    $(".subBox").show();
  }, 5000);

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateFood").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/food.webp')"
    );
    $("#mainHeading").html(
      "Delightful <br>Flavors &  <br>Culinary  <br>Adventures"
    );
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateAll").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/robot.webp')"
    );
    $("#mainHeading").html(
      "Travel <br>Technology <br>Finanace <br>& Many More!"
    );
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateHealth").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('img/health.webp')"
    );
    $("#mainHeading").html("Nurturing <br>  Wellness  & <br>  Well-being");
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateSports").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/sports.webp')"
    );
    $("#mainHeading").html("Thrilling  <br> Athleticism  &  <br> Team Spirit");
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateTechnology").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/technology.webp')"
    );
    $("#mainHeading").html("Embracing the <br> Digital<br> Revolution");
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateTravel").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/travel.webp')"
    );
    $("#mainHeading").html("Exploring <br>  New Horizons <br>  & Cultures.");
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateFashion").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/fashion.webp')"
    );
    $("#mainHeading").html(
      "Style  <br> Trends & <br>  Personal  <br> Statements"
    );
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateBeauty").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/beauty.webp')"
    );
    $("#mainHeading").html(
      "Embracing  <br> Self-expression  & <br>  Aesthetics"
    );
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateAi").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/ai.webp')"
    );
    $("#mainHeading").html(
      "Intelligent <br>  Machines <br>  Shaping <br>  the Future"
    );
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateBussiness").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/bussiness.webp')"
    );
    $("#mainHeading").html("Bussiness & <br> Market <br> Dynamics");
  });

  // JS for changing the background and main heading text according the category -----------------------
  $(".cateArts").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/art.webp')"
    );
    $("#mainHeading").html(
      "Creativity <br> Unleashed <br>  Through Various <br>  Mediums"
    );
  });

  // To top button js -----------------------------------------------
  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $("#toTopBtn").fadeIn();
      $(".cateList").slideUp(200);
    } else {
      $("#toTopBtn").fadeOut();
    }
  });
  $("#toTopBtn").click(function () {
    $(window).scrollTop(0);
  });
});

// JS for filter blog posts on base of category --------------------------------
filterSelection("All");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("blogContainer");
  if (c == "All") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// JS for preloader -------------------------------------------------
let preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
  preloader.style.display = "none";
});

// JS for admin panel toggle buttons ----------------------------------------
$(".listBlogBtn").click(function () {
  $(".listBlogBtn").addClass("borderActive");
  $(".uploadBlogBtn").removeClass("borderActive");
  $(".listBox").show();
  $(".uploadBox").hide();
});
$(".uploadBlogBtn").click(function () {
  $(".uploadBlogBtn").addClass("borderActive");
  $(".listBlogBtn").removeClass("borderActive");
  $(".listBox").hide();
  $(".uploadBox").show();
});

// JS for blog copy link section ----------------------------

$(".copyBlogLink").click(function () {
  $(".copyBlogLink").hide();
  $(".copiedBlogLink").show();
});
window.addEventListener("load", function () {
  let copyInp = document.getElementById("shareableLink");
  copyInp.value = window.location.href;
});
$(".copyBlogLink").click(function () {
  navigator.clipboard.writeText(window.location.href);
});
