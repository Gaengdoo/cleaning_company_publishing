//탑메뉴 스크롤시 상단고정
$(document).ready(function(){
  window.onscroll = function() {myFunction()};

  var nav = document.getElementById("header");
  var sticky = nav.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      nav.classList.add("sticky");
      $('.f_floatBtn').addClass('sticky');
    } else {
      nav.classList.remove("sticky");
      $('.f_floatBtn').removeClass('sticky');
    }
  };
});

$(window).on('load',function(){

  // 메뉴 아이콘 클릭시 청소업체 검색 드롭다운메뉴
  $('.showDropmenu').on('click',function(){
    $('.showDropmenu').toggleClass("imgChange");
		if($('.cleanbell-dropmenu').hasClass('hover')){
			$('.cleanbell-dropmenu').removeClass('hover');
		} else {
			$('.cleanbell-dropmenu').addClass('hover');
		}
	})
	$('.cleanbell-dropmenu').on('mouseleave',function(){
		$(this).removeClass('hover');
	});

  //청소업체 검색 드롭다운 메뉴
  $('.cleanbellDrop').hover(function(){
    $('.showDropmenu').addClass("imgChange");
    $('.cleanbellDrop > a').addClass("before");
    $('.cleanbell-dropmenu').addClass("hover");
  }, function(){
    $('.showDropmenu').removeClass("imgChange");
    $('.cleanbellDrop > a').removeClass("before");
    $('.cleanbell-dropmenu').removeClass("hover");
  });
  //프리미엄 청소 드롭다운 메뉴
  $('.premiumDrop').hover(function(){
    $('.showDropmenu').addClass("imgChange");
    $('.premiumDrop > a').addClass("before");
    $('.premium-dropmenu').addClass("hover");
  }, function(){
    $('.showDropmenu').removeClass("imgChange");
    $('.premiumDrop > a').removeClass("before");
    $('.premium-dropmenu').removeClass("hover");
  });
  //searchTab
  $('.tablink').click(function(){
    $('.tablink').removeClass('active');
    $(this).addClass('active');
    $('.searchBoxes div').hide();
    $('#' + $(this).data('rel')).show().css('display','block');
    var offset = $('.tablink.active').offset();
    $('html, body').animate({
      scrollTop:offset.top - 100
    }, 400);
  });
  //청소종류 선택
  $('#selectDisplay').click(function(){
    $('.cleanDateModal').hide();
    $('.cleanerKinds ol').show();
    $('.cleanerKinds ol li a').click(function(){
      $('.cleanerKinds ol').hide();
      $('#selectDisplay').prop('class',$(this).data('rel')).text($(this).text());
    });
  });
  //지역 선택
  $('#locationDisplay').on('click',function(){
    $('.cleanerLocation ol').addClass('on').on('mouseleave',function(){
      $('.cleanerLocation ol').removeClass('on');
    });
  });
  //지역 선택 checkbox
  $('.cleanerLocation li.firstSelect input[type="checkbox"]').on('click', function(){
    $('.cleanerLocation li.firstSelect input[type="checkbox"]:checked').not(this).prop('checked', false);
  });
  $('.cleanerLocation li.secondSelect input[type="checkbox"]').on('click', function(){
    $('.cleanerLocation li.secondSelect input[type="checkbox"]:checked').not(this).prop('checked', false);
  });
  //1차 지역 선택 toggle
  $('.cleanerLocation .firstSelect').on('click', function(){
    $('.cleanerLocation .firstSelect div:last-child').toggle();
    $('.cleanerLocation .secondSelect div:last-child').toggle();
  });
  //2차 지역 선택 toggle
  $('.cleanerLocation .secondSelect').on('click', function(){
    $('.cleanerLocation .firstSelect div:last-child').toggle();
    $('.cleanerLocation .secondSelect div:last-child').toggle();
    $('.selectComplete-location').click(function(){
      $('.cleanerLocation ol').removeClass('on');
    });
  });
  //날짜 선택시 달력 열림
  $('.openCalendar').click(function(){
    $('.cleanerKinds ol').hide();
    $('.cleanDateModal').show();
    $('.selectComplete').click(function(){
      $('.cleanDateModal').hide();
    });
  });

  //mobile 달력내부 toggle
  if($(window).width() <= 720){
    $('.cleanStart_dt').on('click',function(){
      $('.cleanStart_dd').show();
      $('.cleanMove_dd').hide();
      $('.selectComplete').hide();
    });
    $('.cleanMove_dt').on('click',function(){
      $('.cleanStart_dd').hide();
      $('.cleanMove_dd').show();
      $('.selectComplete').show().css('display','block');
    })
  };

  //구조 선택
  $('#selectStruct').click(function(){
    $('.cleanerStruct ol').show();
    $('.cleanerStruct ol li a').click(function(){
      $('.cleanerStruct ol').hide();
      $('#selectStruct').text($(this).text());
    });
  });
  $('.searchMarket').click(function(){
    $('.searchResult').show();
  });
  //모달 열림
  $('.cleanerSeach').click(function(){
    $('#modal').show();
    $('.modal_intro').show();
    $('.modal_survey').hide();
    $('.modal_close').click(function(){
      $('.modal_intro').hide();
      $('.modal_survey').show();
    });
  });
  //모달 surveyTab
  // $('.modal_tablink').click(function(){
  //   // $('.modal_tablink').removeClass('active');
  //   // $(this).addClass('active');
  //   $('.surveyBoxes section').hide();
  //   $('#' + $(this).data('rel')).show();
  // });

  //서브페이지 모달-공간의 기본정보 공간 넓이 탭
  $('.spaceBtn').click(function(){
    $('.spaceBtn').removeClass('on');
    $(this).addClass('on');
  });
  //서브페이지 모달-공간의 기본정보 공간 종류 체크박스
  $('.spaceCheck').on('click', function() {
    $('.spaceCheck').not(this).prop('checked', false).addClass('disabled');
    if($('.spaceCheck.disabled').click(function(){
      $(this).prop('checked', true).removeClass('disabled');
      $('.spaceCheck').not(this).prop('checked', false).addClass('disabled');
    }));
    $('.4thStep').css('display','block');
  });
  $('#modal-one .spaceCheck').click(function(){
    $('.one-1stStep').css('display','block');
  });
  $('#spaceDi').on('click', function(){
    $('.spaceDiInput').toggleClass('show');
  });
  //서브페이지 모달-공간의 기본정보 공간 상세정보 체크박스
  $('.spaceStr').on('click', function() {
    $('.spaceStr').not(this).prop('checked', false).toggleClass('disabled');
    if($('.spaceStr.disabled').click(function(){
      $(this).prop('checked', true).removeClass('disabled');
      $('.spaceStr').not(this).prop('checked', false).addClass('disabled');
    }));
    $('.5thStep').css('display','block');
  });
  //서브페이지 모달-공간 개수 +/-
  $('[data-quantity="plus"]').click(function(e){
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    if (!isNaN(currentVal)) {
      $('input[name='+fieldName+']').val(currentVal + 1);
    } else {
      $('input[name='+fieldName+']').val(0);
    }
  });
  $('[data-quantity="minus"]').click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name='+fieldName+']').val(currentVal - 1);
    } else {
      $('input[name='+fieldName+']').val(0);
    }
  });
  //품질 일부 input
  $('.qualityAdd').change(function(){
    if(this.checked){
      $('.addOption').show();
    } else {
      $('.addOption').hide();
    }
  });
  //결제방법 일부 input
  $('.notCash').change(function(){
    if(this.checked){
      $('.addTax').show();
    } else {
      $('.addTax').hide();
    }
  });
  $('.otherclean').on('click', function(){
    $('#modal-one .6thStep').css('display','block');
  });
  //업체선택 페이지 상단 달력 토글
  $('#changeCalendar_dt').on('click', function(){
    $('.topCalendar dd').toggle();
  });
  $('#changeCalendar_dd').click(function(){
    $('.topCalendar dd').hide();
  });
  //업체선택 페이지 조건변경 모달
  $('.optionChange').on('click', function(){
    $('#modal_optionChange').show();
    $('.modal_option_close').click(function(){
      $('#modal_optionChange').hide();
    })
  });
  //조건변경 모달 결제방법 클릭시
  $('.option1 input[type=checkbox]').change(function(){
    if(this.checked){
      $('.option1 input[type=checkbox]').not(this).prop('disabled',true).addClass('disabled');
    } else{
      $('.option1 input[type=checkbox]').prop('disabled',false).removeClass('disabled');;
    }
  })
  //조건변경 모달 결제방법 일부
  $('.optionCredit').change(function(){
    if(this.checked){
      $('.addTax').show();
    } else {
      $('.addTax').hide();
    }
  });
  //조건변경 모달 품질 일부
  $('.optionQuality').change(function(){
    if(this.checked){
      $('.addPrice1').show();
    } else {
      $('.addPrice1').hide();
    }
  });
  //조건변경 모달 부가서비스 일부
  $('.optionService').change(function(){
    if(this.checked){
      $('.addPrice2').show();
    } else {
      $('.addPrice2').hide();
    }
  });
  //MD추천
  $('.openMD').click(function(){
    $('.recoMD_off').hide();
    $('.recoMD_on').show();
  });
  $('.closeMD').click(function(){
    $('.recoMD_on').hide();
    $('.recoMD_off').show();
  });
  //신규업체 주의사항 말풍선
  $('.noticeNew').on('click', function(){
    $('.talkBubble').show();
    $('.talkBubble').click(function(){
      $('.talkBubble').hide();
    })
  });
  //업체 선택시 선택 텍스트변경, 견적신청 버튼 텍스트 변경
  $('.cleaners input[type=checkbox]').on('change', function(){
    if(this.checked){
      $('.quotation').addClass('app');
      $('.quotation span').text('1개 업체 견적 신청')
    } else {
      $('.quotation').removeClass('app');
      $('.quotation span').text('견적 신청')
    }
  });
  //견적신청확인
  $('.quotation').on('click', function(){
    $('#modal_quotation_app').show();
    $('.modal_quotation_app_close').click(function(){
      $('#modal_quotation_app').hide();
    })
  });
  //견적 신청 완료
  $('.go_ok').on('click', function(){
    $(this).parents('.modalpopup').hide();
    $('#modal_quotation_app').hide();
    $('#modal_quotation_ok').show();
    $('.close_quotation').click(function(){
      $('#modal_quotation_ok').hide();
    })
  });
  //검색 종료 확인
  $('.close_end').on('click', function(){
    $('#modal_quotation_end').hide();
    $('#modal_quotation_research').show();
    $('.close_research').click(function(){
      $('#modal_quotation_research').hide();
    })
  });
  //클린벨 배터리 모달
  $('.noticeBattery').on('click', function(){
    $('#modal_battery').show();
    $('.close_battery').click(function(){
      $('#modal_battery').hide();
    })
  });
  //청소범위 탭
  $('.structTab').click(function(){
    $('.structTab').removeClass('active');
    $(this).addClass('active');
    $('.structAll > div').hide();
    $('#' + $(this).data('rel')).show();
  });
  //굿 배드 리뷰 탭
  $('.reviewTab').click(function(){
    $('.reviewTab').removeClass('active');
    $(this).addClass('active');
    $('.reviewBoxes > div').hide();
    $('#' + $(this).data('rel')).show();
  });

  //--탭작동되는 부분에 삽입 시작
  $('.qualitySlide').slick('setPosition');
  //탭작동되는 부분에 삽입 종료

  $('.qualitySlide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: false
  });
  $('.qualitySlide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.reviewDots li.active').removeClass('active');
      $('.reviewDots li').eq(nextSlide).addClass('active');
  });
  $('.reviewDots li').on('click', function(e){
    e.preventDefault();
    $('.reviewDots li.active').removeClass('active');
    $(this).addClass('active');
    var targetSlide = $(this).data('target');
    $('.qualitySlide').slick('slickGoTo', targetSlide);
    if($(targetSlide).hasClass('slick-initialized')){
      $(targetSlide).slick('setPosition');
    }
  });
  $('.qualitySlide').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if($('.rDot.four').hasClass('active')){
      $('.reviewSlide h3 span').html('불만족 고객들은 이렇게 평가했어요.');
      $('.reviewSlide h3 strong').html('');
    } else {
      $('.reviewSlide h3 span').html('청소품질');
      $('.reviewSlide h3 strong').show().html('만족해요');
    }
  });



  // if($(window).width() <= 720){
  //   $('.qualitySlide').trigger('refresh.owl.carousel');
  // });

  $('.floatBtn a').click(function(){
    $('#modal_app').show();
  });
  $('.comDetailTop .apply').click(function(){
    $('#modal_app').show();
  });
  $('.companyIntro .estimate').click(function(){
    $('#modal_app').show();
  });
  //모바일 청소범위 토글
  $('.rangeTog').each(function(){
    $(this).on('click', function(e){
      $('.rangeTog').not(this).removeClass('on');
      $('.rangeTog').not(this).next('.rangeItem').removeClass('on');
      $(this).toggleClass('on');
      $(this).next('.rangeItem').toggleClass('on');
      e.preventDefault();
    });
  });

  //190709 add

  $('#searchbtn-oneroom').click(function(){
    $('#modal-oneroom').show();
    $('.modal_survey').show();
    $('#modal-oneroom #step1').show();
  });
  $('#oneroom-btn-cert-1').on('click', function(){
    $('.oneroom-cert').show();
  });
  $('.closeStep').on('click', function(){
    $('#modal-oneroom').hide();
  });
  $('#modal-oneroom .closeModal').on('click', function(){
    $('#modal-close-1').show();
  });
  $('#modal .closeModal').on('click', function(){
    //$('#modal').hide();
    $('#modal-close-1').show();
  });
  $('#modal-close-1 .modal_close').on('click', function(){
    $('.modalpopup').hide();
    $('.modal_intro-main').hide();
    $('.modal_survey-main').hide();
    $('.modal_intro').hide();
    $('.modal_survey').hide();
  });
  $('#modal-close-1 .go_ok').on('click', function(){
    $('#modal-close-1').hide();
  });
  $('#modal-close-2 .modal_close').on('click', function(){
    $('.modalpopup').hide();
    $('.modal_intro-main').hide();
    $('.modal_survey-main').hide();
    $('.modal_intro').hide();
    $('.modal_survey').hide();
  });
  $('#modal-close-2 .go_ok').on('click', function(){
    $('#modal-close-2').hide();
  });

  //업체선택페이지-캘린더
  $('#filCal').on('click', function(){
    $('.filCalendar').addClass('float');
    $('#calendarChange').show();
  });

  //툴팁(광고설명)
  $( document ).tooltip({
    position: {
      my: "center bottom-20",
      at: "right+95 top",
      using: function(position, feedback){
        $(this).css(position);
        $("<div>").addClass("tooltip-arrow").addClass(feedback.vertical).addClass(feedback.horizontal).appendTo(this);
      }
    }
  });

  //pc버전 업체리스트 마우스오버시 툴팁
  $('.est-price').each(function(){
    $(this).mouseenter(function(){
      $(this).parents('.addBox').addClass('showTip');
    });
    $(this).mouseout(function(){
      $(this).parents('.addBox').removeClass('showTip');
    });
  });

  //업체목록 조회중입니다.
  $('#loadingCompany').fadeOut(4000);

  //검색없을시 깜빡이는 툴팁
  $('#filter-search').click(function(){
    $('.addNoneTip').hide();
  });

  //견적신청 전체선택
  $('#estAll').on('click', function(){
    if($('#estAll').prop('checked')){
      $('.est').prop('checked', true);
    } else {
      $('.est').prop('checked', false);
    }
  });

  //상담신청 전체선택
  $('#consultAll').on('click', function(){
    if($('#consultAll').prop('checked')){
      $('.consult').prop('checked', true);
    } else {
      $('.consult').prop('checked', false);
    }
  });

  //토글 내 안내사항
  $('.modal_quotation_top.app h3 small').click(function(){
    $('#addTip-small').toggle();
  });

  //모바일 달력버튼 클릭시
  $('.CalendarBox .openBarCal').on('click', function(){
    if($('.CalendarBox').hasClass('datepicker-M')){
      $('.CalendarBox').removeClass('datepicker-M');
    } else {
      $('.CalendarBox').addClass('datepicker-M');
    }
  });

  //모바일 상세조건 클릭시
  $('.Mfilter > a').click(function(){
    $('.addNoneTip').hide();
    $('.Moption').removeClass('on');
    $('.MoptionBox').removeClass('on');
    if($('.Mfilter').hasClass('on')){
      $('.Mfilter').removeClass('on');
      $('.MfilterBox').removeClass('on');
    } else {
      $('.Mfilter').addClass('on');
      $('.MfilterBox').addClass('on');
    }
  });

  //모바일 상세조건 세부탭
  $('.filterTab').click(function(){
    $('.filterTab').removeClass('active');
    $(this).addClass('active');
    $('.MfilterBox > div').hide();
    $('#' + $(this).data('rel')).show();
  });

  //모바일 평점순 클릭시
  $('.Moption > a').click(function(){
    $('.addNoneTip').hide();
    $('.Mfilter').removeClass('on');
    $('.MfilterBox').removeClass('on');
    if($('.Moption').hasClass('on')){
      $('.Moption').removeClass('on');
      $('.MoptionBox').removeClass('on');
    } else {
      $('.Moption').addClass('on');
      $('.MoptionBox').addClass('on');
    }
  });

  //모바일 평점순 세부탭
  $('.optionTab').click(function(){
    $('.optionTab').removeClass('active');
    $(this).addClass('active');
  });

  $('.select-menu').selectmenu();

  $('.modalpopup .close_end').click(function(){
    $('.modalpopup').hide();
  });

  //190807 추가
  //기존견적확인 인증번호발송
  $('#searchOriginal .cert_1').click(function(){
    $('#searchOriginal').removeClass('firstStep');
    $('.cert_1').removeClass('ready')
    $('#phoneCert-original').show();
    $('.cert_2.action').click(function(){
      $('.cert_2.action').addClass('success').val('인증성공');
    });
  });

  //원룸청소업체검색 모달인증번호
  $('#oneroom-btn-cert-1').click(function(){
    $('#phoneCert').show();
    $('#oneroom-btn-cert-1').css('background','#322d4f').css('color','#fff');
  });
  $('#oneroom-btn-cert-2').click(function(){
    $('#oneroom-btn-cert-1').css('background','#e4e4e4').css('color','#b5b5b5').prop('disabled', true);
    $('#oneroom-btn-cert-2').addClass('action');
    $('.step_check').show();
    $('#modal-oneroom #step1 .nextStep').show().css('display','block');
    //한번더클릭
    $('#oneroom-btn-cert-2.action').click(function(){
      $('#oneroom-btn-cert-2.action').addClass('success').val('인증성공');
    });
  });

  //checkbox name 동일
  $(".howclean input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = ".howclean input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

  //main 간편 상담 클릭 #modal-normal 오픈
  $('.easyCounsel').each(function(){
    $(this).click(function(){
      $('#modal-normal').show();
    });
  });

  //inputClick 클릭시 input에 패딩값 추가 및 버튼 오픈
  $('.inputClick').each(function(){
    $(this).click(function(){
      $(this).addClass('padding').next('input[type=button]').show();
    })
  });

  //청소업체찾기 클릭
  $('.findCleaner').each(function(){
    $(this).click(function(){
      $('#modal-main').show();
      $('.modal_survey-main').show();
      $('.modal_intro-main').show();
      $('.surveyBoxes-main > section').hide();
      $('#step1-main').show();
    });
  });
  //공간 넓이 글자수 감지
  $('input[type=text]#spaceSize').keyup(function(){
    var val = $(this).val();
    if(val.length > 0){
      $('.description').css('display', 'block');
    } else {
      $('.description').css('display', 'none');
    }
  });

  $('input[type=text]#detailAddress-main').keyup(function(){
    var val = $(this).val();
    if(val.length > 1){
      $('#modal-main .finalStep').css('display', 'block');
    }
  });

  $('input[type=text]#detailAddress-one').keyup(function(){
    var val = $(this).val();
    if(val.length > 1){
      $('#modal-one .finalStep').css('display', 'block');
    }
  });

  //input tel 글자수 감지
  $('input[type=tel]').keyup(function(){
    var val = $(this).val();
    if(val.length == 13){
      $(this).next('input[type=button]').addClass('ready');
    } else {
      $(this).next('input[type=button]').removeClass('ready');
    }
  });
  //인증번호 글자수 감지
  $('#phoneCert input[type=text]').keyup(function(){
    var val = $(this).val();
    if(val.length == 6){
      $(this).next().next('input[type=button]').addClass('ready');
    } else {
      $(this).next().next('input[type=button]').removeClass('ready');
    }
  });

  //모달-휴대폰 인증
  $('.btn_cert_1').each(function(){
    $(this).click(function(){
      $(this).val('재발송');
      $(this).closest('li').next('li').css('display', 'block');
      // $('.btn_cert_1').val('재발송');
      //gabageTime 카운트다운
      var timer2 = "3:00";
      var interval = setInterval(function(){
        var timer = timer2.split(':');
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        if(minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        $('.gabageTime').html(minutes + ':' + seconds);
        timer2 = minutes + ':' + seconds;
      }, 1000);
    });
  });
  $('.btn_cert_2').each(function(){
    $(this).click(function(){
      $(this).closest('.btn_cert_1').removeClass('ready').prop('disabled', true);
      $(this).removeClass('ready').addClass('action').val('인증완료');
      $(this).closest('.inputbox').nextAll('div').show();
    });
  });
  $('#btn-cert-2').click(function(){
    $('#modal-main #step1-main .nextStep').show().css('display','block');
  });


  //prevstep 클릭
  $('.prevstep').each(function(){
    $(this).click(function(){
      $(this).closest('section').hide();
      $(this).closest('section').prev('section').show();
    });
  });

  //nextstep 클릭
  $('.nextStep').each(function(){
    $(this).click(function(){
      $(this).closest('section').hide();
      $(this).closest('section').next('section').show();
      if($(this).hasClass('.finalStep')){
        $('.modalpopup').hide();
        var href = $(this).attr('href');
        $(this).attr('onclick', "window.location='" + href + "'")
      }
    });
  });

  //간편상담 휴대폰 인증
  $('.phone-step-1 .certSubmit').click(function(){
    //$(this).removeClass('ready');
    $('.phone-step-2').show().addClass('inlineBlock');
  });

  //인증번호확인
  $('.certCheck').click(function(){
    $(this).val('인증완료').addClass('action');
    $(this).closest('.inputbox').nextAll().show();
    // $(this).closest('.step_arrow').show();
  });

  //모달 X 버튼 클릭시 모달 닫힘
  $('.closeModal').click(function(){
    // $(this).nextAll('section').hide();
    // $(this).parents('.modal_survey-main').hide();
    // $(this).parents('.modalpopup').hide();
    $('#modal-close-2').show();
  });
  $('.modal_close').click(function(){
    $(this).parents('.modalpopup').hide();
  });

  //상담예약 클릭시 상담예약완료 팝업
  $('.step_reserve').click(function(){
    $(this).parents('.modalpopup').hide();
    $('#modal-reserve-comp').show();
  });

  //간편 상담 모달 내 달력
  $('.mainDatepicker').click(function(){
    $('.mainDatepickerHover').show();
    $('.ui-state-default').click(function(){
      $('.mainDatepickerHover').hide();
    });
  });
  $('.easyDatepicker').datepicker({
    dateFormat:'yy-mm-dd',
    inline:true,
    showOtherMonths:true,
    showMonthAfterYear:true,
    monthNames: [ '. 01', '. 02', '. 03', '. 04', '. 05', '. 06', '. 07', '. 08', '. 09', '. 10', '. 11', '. 12' ],
    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    onSelect: function(selectedDate){
      $('.mainDatepicker').html(selectedDate).addClass('lato');
      $('.easyDate').html(selectedDate).addClass('lato');
    }
  });

  //간편상담 모달 내 달력 닫기
  $('.mainDatepickerHover .easyDate').click(function(){
    $('.mainDatepickerHover').hide();
  });


  //메인 모달 - 청소날짜 이사날짜 선택
  // if($(window).width() > 720){
  //   $('.calTab div').click(function(){
  //     $('.calTab').removeClass('on');
  //     $(this).closest('li').addClass('on');
  //     $('.multiDate').show();
  //   });
  // };

  //if($(window).width() <= 720){
    $('#selectCleanDate').show();
    $('#selectMoveDate').hide();

    $('.selectCleanDate').click(function(){
      $('.calTab').removeClass('on');
      $(this).closest('li').addClass('on');
      $('.multiDate').show();
      $('#selectCleanDate').show();
      $('#selectMoveDate').hide();
    });
    $('.selectMoveDate').click(function(){
      $('.calTab').removeClass('on');
      $(this).closest('li').addClass('on');
      $('.multiDate').show();
      $('#selectCleanDate').hide();
      $('#selectMoveDate').show();
    });
  //};
  if($(window).width() <= 720){
    $('.finalStep').html('업체 검색');
  };
  $('.selectMoveDate').click(function(){
    $('.2thStep').css('display', 'block');
  })

  $('#selectCleanDate').datepicker({
    dateFormat:'yy-mm-dd',
    inline:true,
    //numberOfMonths:2,
    showOtherMonths:true,
    showMonthAfterYear:true,
    monthNames: [ '. 01', '. 02', '. 03', '. 04', '. 05', '. 06', '. 07', '. 08', '. 09', '. 10', '. 11', '. 12' ],
    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    onSelect: function(selectedDate){
      $('.selectCleanDate').html("<strong class='margin'>청소일</strong>" + selectedDate).addClass('lato');
    }
  });
  $('#selectCleanDate').datepicker('setDate', 'today');
  $('#selectMoveDate').datepicker({
    dateFormat:'yy-mm-dd',
    inline:true,
    showOtherMonths:true,
    showMonthAfterYear:true,
    monthNames: [ '. 01', '. 02', '. 03', '. 04', '. 05', '. 06', '. 07', '. 08', '. 09', '. 10', '. 11', '. 12' ],
    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    onSelect: function(selectedDate){
      $('.selectMoveDate').html("<strong class='margin'>이사일</strong>" + selectedDate).addClass('lato');
    }
  });
  $('#selectMoveDate').datepicker('setDate', '+1M');

  //메인 모달 - 청소종류 선택
  $('.cleanTab').click(function(){
    $('.cleanTab').removeClass('active');
    $(this).addClass('active');
    if($(this).children().hasClass('normalClean')){
      $('.howclean').show();
    } else {
      $('.howclean').hide();
      $('.3thStep').css('display', 'block');
    }
  });

    $('.3thStep').click(function(){
      if($('.cleanTab.active').children().hasClass('oneroomClean')){
        $('#modal-main').hide();
        $('#modal-one').show();
        $('#modal-one .modal-one-first').show();
      };
    });

  $('#detailAddress-main').keyup(function(){
    var val = $(this).val();
    if(val.length > 0){
      $('#modal-main .finalStep').css('display', 'block');
    } else {
      $('#modal-main .finalStep').css('display', 'none');
    }
  });

  $('#detailAddress-one').keyup(function(){
    var val = $(this).val();
    if(val.length > 0){
      $('#modal-one .finalStep').css('display', 'block');
    } else {
      $('#modal-one .finalStep').css('display', 'none');
    }
  });

  $('.addhow').each(function(){
    var prevInput = $(this).prev('input[type=checkbox]');
    if(prevInput.checked){
      $(this).parents('.howclean').closest('.howcleanTip').css('display', 'block');
    } else {
      $('.howcleanTip').hide();
    }
  });

  $('.howclean input[type=checkbox]+label').click(function(){
    $('.3thStep').css('display', 'block');
  });

  $('.howclean input[type=checkbox]+label').click(function(){
    $('.3thStep').css('display', 'block');
  });

  $('.idontknow').click(function(){
    $(this).parents('.inputbox').addClass('v1');
    $('.inputbox.v2').show();
    $('.finalStep').css('display', 'block');
  });

  //시세 확인하기 클릭
  $('.priceCheck').click(function(){
    $('#modal_priceCheck').show();
  });

  //mfilter
  $('.mfilter-cancel').click(function(){
    $('.Mfilter').removeClass('on');
    $('.MfilterBox').removeClass('on');
  });
  $('.mfilter-apply').click(function(){
    $('.Mfilter').removeClass('on');
    $('.MfilterBox').removeClass('on');
  });

  //qSlideContent progress bar
  $('.progress .bar').each(function(){
    var num = $(this).text();
    $(this).css('width', num+'%');
  });

  //useList 전화하기 팁
  $('.callTip').each(function(){
    $(this).click(function(){
      $(this).hide();
    });
  });

  //신청내역확인
  $('.checkAppDetail').click(function(){
    $('#modal-personal').show();
    $('.modal_survey-main').show();
    $('#modal-personal section').show();
  });

  $('#p-btn-cert-2').click(function(){
    $('#modal-personal .nextStep').show().css('display','block');
  });

  //입점문의-20191016
  // $('.startKind a').each(function(){
  //   $(this).click(function(){
  //     $('.startKind').removeClass('select');
  //     $('.startKind a').text('자세히 보기').removeClass('apply');
  //     $(this).parents('li').addClass('select');
  //     $(this).text('가입 신청 하기').addClass('apply');
  //     if($(this).hasClass('apply')){
  //       $(this).click(function(){
  //         $('#modal-partner').css('display', 'block');
  //         $('#modal-partner.modalpopup .modal_survey-main').css('display', 'block');
  //       });
  //     };
  //   });
  // });

  $('.startKind a').each(function(){
    $('.startKind a').click(function(){
      $('.startKind').removeClass('select');
      $('.startKind a').css('display', 'block');
      $(this).parents('li').addClass('select');
      $(this).css('display', 'none');
    });
  });

  $('.apply').click(function(){
    $('#modal-partner').css('display', 'block');
    $('#modal-partner.modalpopup .modal_survey-main').css('display', 'block');
  });

  $('.add1016 input[type=checkbox]').click(function(){
    $('#modal-main .6thStep').css('display', 'block');
  });


  if($(window).width() <= 720){
    //생생한 경험담
    $('.expSlider').owlCarousel({
      loop:false,
      margin:0,
      mouseDrag:false,
      nav:true,
      dots:false,
      responsive:{
        0:{
            items:1
        },
        720:{
            items:1
        },
        1000:{
            items:1
        }
      }
    });

    //무료로 시작해보세요!
    $('.startSlider').owlCarousel({
      stagePadding: 60,
      loop:false,
      margin:0,
      mouseDrag:false,
      nav:true,
      dots:false,
      responsive:{
        0:{
            items:1
        },
        720:{
            items:1
        },
        1000:{
            items:1
        }
      }
    });

  };



  $('.applyPartner').click(function(){
    $('#modal-partner').show();
    $('#modal-partner.modalpopup .modal_survey-main').css('display', 'block');
  });

  $('.applyStep').click(function(){
    $('#modal-partner').hide();
  });

  $('#modal-partner .closeModal').click(function(){
    $('#modal-partner').hide();
  });

  //랭킹 박스 클릭시 청소업체 검색 모달 오픈
  $('.rankBox dl').click(function(){
    $('#modal-main').show();
    $('.modal_survey-main').show();
    $('.modal_intro-main').show();
    $('.surveyBoxes-main > section').hide();
    $('#step1-main').show();
  });

});
//열려있는 영역 외 바깥영역 클릭시 현재 영역 닫힘
$(window).mouseup(function (e) {
  if ($(e.target).closest(".cleanerKinds ol").length === 0) {
    $(".cleanerKinds ol").hide();
  };
  if ($(e.target).closest(".cleanDateModal").length === 0) {
    $(".cleanDateModal").hide();
  };
  if ($(e.target).closest(".addTip").length === 0) {
    $(".addTip").hide();
  };
});

// 모바일 스크롤시 버튼 컬러 변경
$(document).ready(function(){

  var lastScroll = 0;
  $(window).scroll(function(e){
    var scroll = $(this).scrollTop();
    if(scroll > 220 && scroll <= 800){
      $('#header.sticky .f_floatBtn').addClass('on');
    } else {
      $('#header.sticky .f_floatBtn').removeClass('on');
    }
    lastScroll = scroll;
  })
});
