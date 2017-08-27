$(document).ready(function(){
  // front-end functions
    var backlogsModule = function(){
        var backlogMenu = function(){
            var bmButton = $(document).find('.backlog-mobile-menu');
            bmButton.each(function(){
                var bm = $(this).parent().find('.backlog-buttons');
                $(this).click(function(){
                    if(bm.hasClass('open')){
                        $('.backlog-buttons').removeClass('open');
                        bm.removeClass('open');
                    }else{
                        $('.backlog-buttons').removeClass('open');
                        bm.addClass('open');                            
                    }
                });
            });
        }();
        var storiesMenu = function(){
            var bmButton = $(document).find('.backlog-story-mobile-menu');
            bmButton.each(function(){
                var bm = $(this).parent().find('.backlog-story-buttons');
                $(this).click(function(){
                    if(bm.hasClass('open')){
                        $('.backlog-story-buttons').removeClass('open');
                        bm.removeClass('open');
                    }else{
                        $('.backlog-story-buttons').removeClass('open');
                        bm.addClass('open');                            
                    }
                });
            });
        }();

        var backlogShowTasks = function(){
            var backlogDef = $('.backlog-def');
            backlogDef.each(function(){
                var backlogTasks = $(this).parent().parent().find('.backlog-tasks');
                $(this).click(function(){
                    if(backlogTasks.hasClass('open')){
                        $('.backlog-tasks').removeClass('open').slideUp(80);
                        backlogTasks.removeClass('open').slideUp(80);
                    }else{
                        $('.backlog-tasks').removeClass('open').slideUp(80);
                        backlogTasks.addClass('open').slideDown(80);                                
                    }
                });
            });
        }();
    };

    var sideCommentModule = function(sideCommentButton, sideComment){
      var sideCommentToggle = $(document).find('.side-comments-toggle'),
          closeSideComment = sideComment.find('.close-comment'),
          sideCommentReplace = sideComment.find('.side-comment-replace'),
          postedCommentArea = sideComment.find('.side-comments-posted'),
          paddingHeight = 0;
      //sideCommentReplace.text(sideCommentTitle);
      paddingHeight = sideCommentReplace.parent().parent().height();
      postedCommentArea.css('padding-top', paddingHeight + 40 + 'px')
      sideComment.addClass('open');
      sideCommentToggle.show();

      closeSideComment.click(function(){
        sideComment.removeClass('open');
        sideCommentToggle.hide();
      });
      sideCommentToggle.click(function(){
        $(this).hide();
        sideComment.removeClass('open');
      });
    };

    var tabsModule = function(){
      var tabs = $(document).find('.tabs-main');

      tabs.each(function(){
        // mobile tabs menu
        var mobileTabsOpenButton = $(this).find('.tabs-header p'),
            tabsMenu = $(this).find('.tabs-header ul');
        mobileTabsOpenButton.click(function(){
          if(tabsMenu.hasClass('open')){
            tabsMenu.removeClass('open').slideUp(150);
          }else{
            tabsMenu.addClass('open').slideDown(150);
          }
        });
        var activeLi = $(document).find('.tabs-header ul li')
        $(activeLi[0]).addClass('active');
      });
    };

    var backlogSideComment = function(){
      var backlogSideCommentButton = $(document).find('.open-side-comments');
      backlogSideCommentButton.each(function(){
        var sideCommentHier = $(this).parent().parent().parent().find('.side-comments'),
            backlogCommentTitle = $(this).parent().parent().find('.backlog-name p');
        $(this).click(function(){
          sideCommentModule($(this), sideCommentHier);
        });
      });
    };

    var sprintsModule = function(){
        var sprints = $(document).find('.sprints-bloc');

        var openSrpintPannel = function(){
          sprints.each(function(){
            $this = $(this);
            var openPannelButtons = $(this).find('.sprint-menu ul li.with-pannel'),
                sprintsPannels = $(this).find('.sprint-content-pannel');
            openPannelButtons.each(function(){
              var dataId = $(this).data('sprintpannel'),
                  pannelToOpen = $this.find('.sprint-content-pannel-'+dataId)
              $(this).click(function(){
                if(pannelToOpen.hasClass('open')){
                  pannelToOpen.removeClass('open');
                  $(this).removeClass('active');
                }else{
                  sprintsPannels.removeClass('open');
                  openPannelButtons.removeClass('active');
                  pannelToOpen.addClass('open');
                  $(this).addClass('active');
                }
              });
            });
          });
        }();

        var sprintComment = function(){
          sprints.each(function(){
            var openComment = $(this).find('.sprint-open-comment'),
                sideCommentHier = $(this).find('.side-comments');
            openComment.click(function(){
              sideCommentModule($(this), sideCommentHier);
            })
          });
        }();

        var sprintProgress = function(){
          sprints.each(function(){
            var progressContainer = $(this).find('.sprint-progression'),
                progressNum = $(this).find('.sprint-progression span').text(),
                progressBar = $(this).find('.sprint-gage');
                for(var i = 0; i <= progressNum; i++){
                  progressBar.css('width', i + '%');
                  if(progressNum < 25){
                    progressBar.addClass('sprint-gage-0')
                  }
                  if(progressNum > 25 && progressNum < 50 ){
                    progressBar.addClass('sprint-gage-25')
                  }
                  if(progressNum > 50 && progressNum < 75){
                    progressBar.addClass('sprint-gage-50')
                  }
                  if(progressNum > 75 && progressNum < 100){
                    progressBar.addClass('sprint-gage-75')
                  }
                  if(progressNum === 100 ){
                    progressBar.addClass('sprint-gage-100')
                  }
                }
            
          });
        }();

        var SprintProgressCanvas = function(){
          var SprintprogressContent = $('.sprint-progress-canvas');   
          
          SprintprogressContent.each(function(){
            var pi = Math.PI,
                min = 0,
                max = 100,
                progressLevel = $(this).data('progress'),
                ratio = (progressLevel - min) / (max - min),
                fullRatio = (100 - min) / (max - min),
                canvasBehind = $('<canvas class="canvas-0" width="100px" height="100px"></canvas>'),
                canvasFront = $('<canvas class="canvas-1" width="100px" height="100px"></canvas>'),
                ctxci = canvasBehind[0].getContext('2d'),
                ctxco = canvasFront[0].getContext('2d');

            $(this).find('.sprint-progress-canvas-num span').append(progressLevel)
            $(this).append(canvasBehind);
            $(this).append(canvasFront);

            //path circle
            ctxci.beginPath();
            ctxci.arc(50,50,40,-1/2*pi,(fullRatio *2*pi) - (1/2*pi));
            ctxci.lineWidth = 10;
            ctxci.strokeStyle = '#E0EAE9';
            ctxci.stroke();

            //path color
            ctxco.beginPath();
            ctxco.arc(50,50,40,-1/2*pi,(ratio *2*pi) - (1/2*pi));
            ctxco.lineWidth = 10;
            ctxco.strokeStyle = '#6FD5CB';
            ctxco.stroke();
          });
        }();
      };

      var ticketsModule = function(){
        var closeTicket = function(){
          var ticketForm = $(document).find('.new-ticket-form');
          ticketForm.each(function(){
            form = $(this);
            var closeTicketForm = $(this).find('p i.fa-times');
            closeTicketForm.click(function(){
              form.remove();
            })
          });
        }();
      }

    // ajax functions
     var interactionsToLoad = function(){
      backlogsModule();
      backlogSideComment(); 
      ajaxModule();
      sprintsModule();
      tabsModule(); 
      ticketsModule();
    }

    // Chargement du formulaire d'ajout de user story au click sur .add-story-loader
    var ajaxModule = function(){        
      $('.add-story').each(function(){
        var $this = $(this),
            loadButton = $(this).find('.add-story-loader'),
            brId = loadButton.attr('id');
        loadButton.click(function(){
          $.ajax({
            type: 'GET',
            url: Routing.generate('backlogs_new', brID),
            /*beforeSend:function(){
              $(".main-content").html(loader).show();
            },*/
            success: function(data){
                $this.html(data).show();
            }
          })
        });
      });

      // Module submit formulaire d'ajout de backlog
      $('.backlog-add-form').each(function(){
        var postControler = $(this).attr('id')
        $(this).submit(function(e){
          e.preventDefault();
          $.ajax({
              type: 'POST',
              url: Routing.generate(postControler+'_index'),
              beforeSend:function(){
                console.log('envoi...');
              },
              success: function(data){
                $('.backlog-container').preppend(data);
                loadWait = window.setTimeout(interactionsToLoad, 300);
              }
          });
        });
      });
    }
    
    // Le loader ajax
    var loader = '<div class="d-row">\
                    <div class="d-col d-col-12 user-story-container">\
                      <div class="admin-content project-bloc backlog-container society-content padded-content">\
                        <div class="ajax-load">\
                          <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>\
                          <p>Chargement...</p>\
                        </div>\
                      </div>\
                    </div>\
                  </div>'

    // fonction injection ajax des différents menus du projet (equipe, backlogs...)
    $('.project-nav ul li a').each(function(){
      var thisId = $(this).attr('id');
      $(this).click(function(){
        $('.project-nav ul li a').removeClass('active');
        $(this).addClass('active');
        $.ajax({
            type: 'GET',
            url: Routing.generate(thisId+'_index'),
            beforeSend:function(){
              $(".main-content").html(loader).show();
            },
            success: function(data){
                $(".main-content").html(data).show();
                loadWait = window.setTimeout(interactionsToLoad, 300);
            }
        });
      });
    });

    // fonction injection ajax affichage des différents scripts
    $('.tabs-header ul li').each(function(){
      var routeSprintId = $(this).attr('id')
      $(this).click(function(){
        $('.tabs-header ul li').removeClass('active');
        $(this).addClass('active');
        $.ajax({
            type: 'GET',
            url: Routing.generate(thisId+'_index'),
            beforeSend:function(){
              $(".tabs-content").html(loader).show();
            },
            success: function(data){
                $(".tabs-content").html(data).show();
                loadWait = window.setTimeout(interactionsToLoad, 300);
            }
        });
      });
    });

    var sprintBlocks = $(document).find('.sprints-bloc');          
      sprintBlocks.each(function(){
        var id = $(this).attr('id'),
            etatSprint = $(this).find('.etat-sprint');
        etatSprint.click(function(){
          $.ajax({             
            type: 'GET',             
            url: Routing.generate('sprints_etat', { id: id }),
            success: function(data) {
              $("#"+id).html(data).show();            
            },
            complete: function(){
              interactionsToLoad();
              sprintBlocks = $(document).find('.sprints-bloc');
            }     
          });
        });
      });


    




});