$(document).ready(function(){

	/*var content = $('.tabs-content').html();
			$('.tabs-content').html('nothing')*/

	//global variables

	var windowWidth = $(window).width(),
			logoContainer = $('.logo img');


	//global functions

		var cl = function(tolog){
			console.log(tolog)
		}

		var toggleItem = function(container, classToggle){
			$(document).mouseup(function(e){
		    if (container.has(e.target).length === 0){
		      container.removeClass(classToggle);		    	
		    }
			});
		}

		var wallImgSorter = function(){
			$('.post-content').each(function(){
				var imgs = $(this).find('img');
				if(imgs.length == 1){
					imgs.parent().addClass('img-1');
				}else if(imgs.length == 2){
					imgs.parent().addClass('img-2');
				}else if(imgs.length == 3){
					imgs.parent().addClass('img-3');
				}if(imgs.length == 4){
					imgs.parent().addClass('img-4');
				}
				var lastImg = $(this).find('img:last');
				if(lastImg.parent().hasClass('img-3')){
					lastImg.parent().addClass('full-img')
				}
			});
			$('.post-content-img').each(function(){
				var imgHeight = $(this).children().height();
				$(this).css('height', imgHeight);
			});
		}

		var infoUser = function(){
			var infoUserName = function(){
				var userName = $('.info-user p a');
				userName.each(function(){
					var thisText = $(this).text(),
							tTLength = thisText.length
					if(tTLength > 20){
						$(this).text(thisText.substring(0, 16));
						$(this).addClass('tronquate');
					}
				});
			}();

			var userSheet = function(){
				var infoBloc = $('.info-bloc');
				infoBloc.each(function(){
					var userSheetBloc = $(this).children('.user-sheet');
					$(this).hover(function(){
						userSheetBloc.fadeIn(150);
					});
					$(this).mouseleave(function(){
						userSheetBloc.fadeOut(150);
					});
					userSheetBloc.each(function(){
						var userSheetBio = $(this).children('.user-sheet-bio'),
								usbText = userSheetBio.text();
						userSheetBio.text(usbText.substring(0, 140) + '[ ... ]')
					});
				});
			}();

			var deleteOffer = function(){
				var closeOffer = $('.decline');
				closeOffer.each(function(){
					var parentToClose = $(this).parent().parent();
					$(this).click(function(e){
						e.preventDefault();
						//parentToClose.slideUp(150);
						parentToClose.html('<div class="affine">Ok, nous affienons nos recommandations...</div>');
					})
				});
			}();
		}

		var wallImgSizer = function(){
			$('.img-1').each(function(){
				var imgWidth = $(this).children('img').width();
				$(this).css('width', imgWidth);
			});
		}

		var sideMenu = function(){
			$('.sidebar-icon').each(function(){
				var sidebarId = $(this).attr('id');
				$(this).click(function(){
					$('.sidebar-icon').removeClass('active');
					$('.sidebar-icon').removeClass('active-800');
					$(this).addClass('active');
					$('.sidebar-content').removeClass('open');
					$('.sidebar-content').removeClass('default-800');
					$('.'+sidebarId).addClass('open');					
				});
			});
		}

		var addFile = function(){			
			var placeHold = $('.files-added'),
					addIcon,
					addFileIcon = $('.add-files'),					
					inputCount = 1,
					addDark = $('.add-dark'),
					label = $('.label-add'),
					input = $('.input-add');

			addFileIcon.each(function(){
				var nextContainer = $(this).parent().find('.add-files-container');
				$(this).click(function(){
					if(nextContainer.hasClass('open')){
						nextContainer.removeClass('open');
						nextContainer.fadeOut(150);
						addDark.fadeOut(150);
					}else{
						nextContainer.addClass('open');
						nextContainer.fadeIn(150);
						addDark.fadeIn(150);
					}
				});
			});
			addDark.click(function(){
				$('.add-files-container').removeClass('open');
				$('.add-files-container').fadeOut(150);
				addDark.fadeOut(150);
			});
		}

		var mobileInfoConnect = function(){

			$('.info-bloc').each(function(){
				var connectButtonBlock = $(this).children('.info-connect');
				$(this).click(function(){
					connectButtonBlock.fadeIn();
				});
			});
			$('.info-connect a').each(function(){
				var pBlock = $(this).parent().parent();			
				$(this).click(function(){
					pBlock.slideUp(150);
					setTimeout(function() {
					  pBlock.remove();
					}, 250);
					setTimeout(function() {
					  var iBlocks = $(document).find('.follow');
					  if(iBlocks.length === 0){
					  	$('.relations').slideUp(130);
					  }
					}, 260);
				});
			});
		}

		var mobileInfoShow = function(){
			var ib = $('.infobar'),
					r = $('.relations'),
					m= $('.main')
					ns = [0,1,2,3,4],
					nRandom = Math.floor(Math.random()*ns.length),
					n = parseInt(ns[nRandom], 10);

					if(n === 4){
						r.show();
						//mobileInfoConnect();
					}else{
					  m.addClass('padded')
						ib.addClass('empty');
						r.remove();
					}
		}

		var teamTab = function(){
			var team = $('.team-name');

			team.each(function(){
				var firstLetter = $(this).text().substring(0,1),
						teamLetter = $(this).parent().find('.team-letter');
				teamLetter.text(firstLetter)
			});
		}

		var openPostAction = function(){
			var postActionIcons = $('.open-content'),
					darker = $('.post-action-dark'),
					cancel = false;

			postActionIcons.each(function(){
				var actionIcon = $(this).children('i'),
						actionContent = $(this).children('.post-actions-content');
				
				cancel = actionContent.find('.cancel')
				
				actionIcon.click(function(){
					actionContent.fadeIn(150);
					darker.fadeIn(150);
				});
				cancel.click(function(){
					actionContent.fadeOut(150);
					darker.fadeOut(150);
				});
				darker.click(function(){
					actionContent.fadeOut(150);
					darker.fadeOut(150);
				});
			});
		}

		var quotePost = function(){
				var quoteIcon = $('.quote-icon'),
						darker = $('.post-action-dark')
				quoteIcon.each(function(){
					var actualPost = $(this).parent().parent().parent().children('.post-container'),
							quotePostBlock = $(this).parent().find('.quote-post'),
							cancel = $(this).parent().find('.cancel');
					$(this).click(function(){
						var clonePost = actualPost.clone()
						quotePostBlock.html(clonePost)
					});
					darker.click(function(){
						quotePostBlock.html(' ');
					});
					cancel.click(function(){
						quotePostBlock.html(' ');
					});
				});
			}

			var newPost = function(){
				var postForm = $('.add-post-form'),
						textarea = $('.add-post-form .add-message'),
						submit = $('.new-post');

				textarea.focus(function(){
					postForm.addClass('open');
				});
				/*textarea.blur(function(){
					if(textarea.val() != ''){
						return
					}else{
						postForm.removeClass('open');
					}
				});*/

				textarea.keyup(function(){
					if(textarea.val() != ''){
						submit.removeClass('unable');
					}else{
						submit.addClass('unable');
					}
				});
			}

			var profilContent = function(){
				var profilMenuA = $('.profil-top-menu li');
				profilMenuA.each(function(){
					var target = $('.profil-content-'+$(this).attr('id')),
							numbers = $(this).children('span').text(),
							numberContainer = target.find('.numbers');
							if(numbers != ''){
								numberContainer.append(' ('+numbers+')');
							}
					$(this).click(function(){
						profilMenuA.removeClass('active');
						$(this).addClass('active');
						$('.profil-content').removeClass('active');
						target.addClass('active');
					})
				});

				var relationSearch = function(){				
					var searchProfilContent = function(toSearch, searchBar){
						toSearch.each(function(){
							var $rel = $(this),
									relationText = $(this).text(),
									matchRelation = relationText.toLowerCase();
							searchBar.keyup(function(){
								var relationSearchVal = $(this).val();
								if(matchRelation.search(relationSearchVal) >= 0){
									$rel.parent().removeClass('unconcluent')
									$rel.parent().addClass('concluent')
								}else{
									$rel.parent().removeClass('concluent')
									$rel.parent().addClass('unconcluent')
								}
							});
						});
					}


					var relations = $('.relation-col .post-header');
					var abonnements = $('.follow-col .post-header');	
					searchProfilContent(relations, $('#search-bar1'));
					searchProfilContent(abonnements, $('#search-bar2'));

				}();
			}

			var changeProfilImgs = function(){
				var modifyImgAction = $('.modify-action'),
						darkerModify = $('.darker-modify'),
						modifyFile = $('.modify-file'),
						fadeSpeed = 150;
				modifyImgAction.each(function(){
					var blocTarget = $('.'+$(this).attr('id'));
					$(this).click(function(){
						blocTarget.fadeIn(fadeSpeed);
						darkerModify.fadeIn(fadeSpeed)
					});
				});

				var _URL = window.URL;
				modifyFile.each(function(){
					var nextSubmit = $(this).parent().find('.submit'),
							selectedFile = $(this).parent().find('.selected-file'),
							prevLabel =  $(this).parent().find('label'),
							previewImage = $(this).parent().parent().find('.preview-image');
					$(this).change(function(){
						var uploadedFile = $(this).val(),
								shortedFile;
						if(uploadedFile.substring(2) === "C:"){
							shortedFile = uploadedFile.substring(12);
						}else{
							shortedFile = uploadedFile;
						}
						selectedFile.parent().removeClass('error')
						selectedFile.parent().children('i').removeClass('fa-exclamation-circle')
						selectedFile.parent().children('i').addClass('fa-info-circle')
						selectedFile.parent().addClass('info')
						selectedFile.text('Image choisie : ' + uploadedFile);
						prevLabel.text('Choisir une autre image');
						nextSubmit.fadeIn(fadeSpeed);
						if($(this).val() === ''){
							selectedFile.text('Erreur, veuillez selectionner une image');
							selectedFile.parent().children('i').removeClass('fa-info-circle');
							selectedFile.parent().children('i').addClass('fa-exclamation-circle');
							selectedFile.parent().removeClass('info');
							selectedFile.parent().addClass('error');
						}
						var readURL = function(input){
					    if (input.files && input.files[0]) {
				        var reader = new FileReader();
				        reader.onload = function (e) {
				        	//var fileSize = Math.round(input.files[0].size / 1024);
				          previewImage.children('img').attr('src', e.target.result);				        		
				        	/*if(fileSize <= 100){
				        	}else{
				        		selectedFile.html('Erreur, la taille du fichier est incorrecte, veuillez sélectionner un fichier de <strong>moins de 2Mo</strong>');
										selectedFile.parent().children('i').addClass('fa-exclamation-circle');
										selectedFile.parent().removeClass('info');
										selectedFile.parent().addClass('error');
				        	}*/
				        }
				        reader.readAsDataURL(input.files[0]);
					    }
						}
						readURL(this)
				    previewImage.children('img').load(function(){
				    	var modBloc = $(this).parent().parent('.modify-img');

				    	modBloc.each(function(){
				    		var checkImg = $(this).find('.preview-image img');
				    		// modifi pro
				    		if($(this).hasClass('modify-pro')){
						    	if(checkImg.width() > 150){
						    		selectedFile.html("Attention, l'image sélectionnée dépasse la <strong>largeur conseillée de 150px </strong>.<br> Votre image fait : <strong>"+checkImg.width()+'px de large</strong>.');
										selectedFile.parent().children('i').addClass('fa-exclamation-circle');
										selectedFile.parent().removeClass('info');
										selectedFile.parent().removeClass('error');
										selectedFile.parent().addClass('danger');
						    	}
						    }else if($(this).hasClass('modify-cover')){
						    	if(checkImg.width() > 1400){
						    		selectedFile.html("Attention, l'image sélectionnée dépasse la <strong>largeur conseillée de 1400px </strong>.<br> Votre image fait : <strong>"+checkImg.width()+'px de large</strong>.');
										selectedFile.parent().children('i').addClass('fa-exclamation-circle');
										selectedFile.parent().removeClass('info');
										selectedFile.parent().removeClass('error');
										selectedFile.parent().addClass('danger');
						    	}
						    }
				    	});				    	
				    	$(this).addClass('loaded');
				    	$(this).parent().parent().addClass('loaded');
				    });
					});
				});

				var resetUpload = function(){
					$(darkerModify).fadeOut(fadeSpeed);
					$('.modify-img').fadeOut(fadeSpeed);
					$('.selected-file').text('Aucune image choisie');
					$('.modify-file').val('');
					$('.submit').fadeOut(fadeSpeed);
					$('.modify-img label').text('Choisir une image');
					$('.preview-image').children('img').attr('src', '');
					$('.modify-img').removeClass('loaded');
					$('.selected-file').parent().removeClass('error');
					$('.selected-file').parent().removeClass('danger');
					$('.selected-file').parent().addClass('info');
					$('.selected-file').parent().children('i').removeClass('fa-exclamation-circle');
					$('.selected-file').parent().children('i').addClass('fa-info-circle');
				}

				darkerModify.click(function(){					
					resetUpload();
				});
				$('.close-modify').click(function(){
					resetUpload();
				});
			}

			var postEdit = function(){
				var postEditBtn = $('.modify-my-post-btn');
				postEditBtn.each(function(){
					var postEditMenu = $(this).parent().children('.modify-my-post-content');
					$(this).click(function(){
						if(postEditMenu.hasClass('open')){
							postEditMenu.removeClass('open');
							postEditMenu.hide();
						}else{
							postEditMenu.addClass('open');
							postEditMenu.show();
						}
					});
				});
			}

			var addSidebarItem = function(){
				var addInput = $('.add-more-input');
				addInput.each(function(){
					var check = $(this).prev('label').text();
					$(this).focus(function(){
						if($(this).val() === check){
							$(this).val('')
						}
					});
					$(this).blur(function(){
						if($(this).val() === ''){
							$(this).val(check)
						}
					});
				});
			}

			var profilEdit = function(){
				var editFormButton = $('.edit-profil'),
						editForm = $('.edit-profil-form');

				var editFormPlaceholder = function(){
					editForm.each(function(){
						var placeholder = $(this).parent().children('.profil-bloc-content').children('p').text();
						$(this).children().children().children('.text-input').attr('placeholder', placeholder);
						//$(this).children().children().children('textarea').text(placeholder)
					});
				}();

				var editFormClean = function(){
					editForm.each(function(){
						var textarea = $(this).children().children().children('textarea');
						var label = $(this).children().children().children('label');
						var trash = $(this).children().children().children('label').children('i');
						var inputText = $(this).children().children().children('.text-input');
						trash.hover(function(){
							textarea.addClass('light-color')
						});
						trash.mouseout(function(){
							textarea.removeClass('light-color')
						});
						trash.click(function(){
							textarea.val(' ');
						});
					});
				}();

				var editShow = function(){
					var defaultHeight = 'auto';
					editFormButton.each(function(){
						$(this).click(function(){
							$(this).parent().children('.edit-profil-form').fadeIn(250);
							$(this).parent().children('.edit-profil-form').children('p').children('span').text('Ajouter');
							if($(this).parent().children('.edit-profil-form').hasClass('last-page-form')){
								var longerPage = $('.profil-main').height() + $(this).parent().children('.last-page-form').height();
								$('.profil-main').css('height', longerPage + 'px');
							}
							$('.edit-darker').fadeIn(250);
						});
					});
					$('.edit-darker').click(function(){
						$(this).fadeOut(250);
						$('.edit-profil-form').fadeOut(250);
						$('.profil-main').css('height', defaultHeight);
					});
					$('.close-edit').click(function(){
						$('.edit-darker').fadeOut(250);
						$('.edit-profil-form').fadeOut(250);
						$('.profil-main').css('height', defaultHeight);
					});
				}();

				var editInfo = function(){
					var editLink = $('.edit-link');
					editLink.each(function(){
						var editLinkForm = $(this).parent().parent().parent().children('.modify-profil-form');
						$(this).click(function(){
							editLinkForm.fadeIn(250);
							$('.edit-darker').fadeIn(250);
						});
					});
				}();

				var removeInfo = function(){
					var removeLink = $('.remove-link');
					removeLink.each(function(){
						var ask = $(this).next('.remove-ask');
						$(this).click(function(){
							if(ask.hasClass('open')){
								ask.removeClass('open');
							}else{
								ask.addClass('open');
							}
							ask.children('div').click(function(){
								ask.removeClass('open');
							});
						});
					});
				}();
			}

			var textareaRegexp = function(){
				var hastagsDetect = function(){
					
				}
			}

			var channels = function(){
				var channelHeader = $('.main-header'),
						channelName = channelHeader.children('h2').text();
				var channelEdit = function(){
					var channelCog = $('.main-header h2 i');
					channelCog.each(function(){
						var channelOption = $(this).parent().parent().children('.channel-options');
						$(this).click(function(){
							if(channelOption.hasClass('open')){
								channelOption.removeClass('open');
								channelOption.slideUp(150);
							}else{
								channelOption.addClass('open')
								channelOption.slideDown(150);
							}
						});
						$('.channel-main-content').click(function(){
							channelOption.removeClass('open');
							channelOption.slideUp(150);
						});
						$('.sidebar').click(function(){
							channelOption.removeClass('open');
							channelOption.slideUp(150);
						});
						$('.infobar').click(function(){
							channelOption.removeClass('open');
							channelOption.slideUp(150);
						});
					});	
				}();

				var channelInputs = function(){
					$('#channel-name').val(channelName.substring(1))
				}();

				var channelOptionAddMembers = function(){
					if($('.main').hasClass('channel-main')){
						$(".select2").select2();
						$('.select2-dropdown').each(function(){
							$(this).addClass('d-scrollbar');
						});
						$('.select2-search__field').attr('style', 'width: 100%;');
					}
				}();
			}

			var administrationContent = function(){
				var adminMenu = function(){
					var adminArrow = $('.admin-menu-title i');
					adminArrow.each(function(){
						var adminNav = $(this).parent().parent().parent().find('.admin-menu-content');
						$(this).click(function(){
							if(adminNav.hasClass('open')){
								$(this).parent().parent().parent().css('overflow-x','visible')
								adminNav.removeClass('open');
								adminNav.slideUp(150);
							}else{
								$(this).parent().parent().parent().css('overflow-x','visible')
								adminNav.addClass('open');
								adminNav.slideDown(150);
							}
						});
					});
				}();

				var adminSubmenu = function(){
					var hasChild = $('.has-child');
					hasChild.each(function(){
						var childSubmenu = $(this).find('.admin-menu-child');
						$(this).children('.has-child-link').click(function(e){
							e.preventDefault();							
							if(childSubmenu.hasClass('open')){
								$(this).removeClass('submenu-active');
								childSubmenu.removeClass('open').slideUp(150);
							}else{
								$('.has-child-link').removeClass('submenu-active');
								$('.admin-menu-child').removeClass('open');
								$('.admin-menu-child').slideUp(150);
								$(this).addClass('submenu-active');
								childSubmenu.addClass('open').slideDown(150);
							}
						});
					});
				}();

				var adminTable = function(){
					$('.content-table-row').each(function(){
						$(this).append('<div class="clear"></div>');
					});
					$('.admin-container').each(function(){
						$(this).append('<div class="clear"></div>');
					});
					$('.content-table').each(function(){
						$(this).find('.content-table-row:last').addClass('last-item');
					});
					$('.content-table-row').each(function(){

						$(this).find('.content-cell:last').addClass('last-item');
					});
					$('.content-sort:odd').addClass('odd');
					$('.admin-home-table-row:odd').addClass('odd');
				}

				var adminTableSort = function(pageNumber){
					$('.content-sort-table').each(function(){
					 	var currentPage = 0;
				    var numPerPage = pageNumber;
				    var $table = $(this);
				    $table.bind('repaginate', function() {
				      $table.find('.content-table-row').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
				    });
				    $table.trigger('repaginate');
				    var numRows = $table.find('.content-table-row').length;
				    var numPages = Math.ceil(numRows / numPerPage);
				    var $pager = $('<div class="pager"></div>');
				    for (var page = 0; page < numPages; page++) {
			        var pagination = $('<span class="page-number"></span>')
			        pagination.text(page + 1).bind('click', {
			          newPage: page
			        }, function(event) {
		            currentPage = event.data['newPage'];
		            $table.trigger('repaginate');
		            $(this).addClass('active').siblings().removeClass('active');
			        });
			        pagination.addClass('clickable');
			        $(document).find('.pager:last').remove();
			        $pager.append(pagination)
				    }
				    $pager.insertAfter($table.parent()).find('span.page-number:first').addClass('active');

				    $('.clickable').each(function(){
				    	var pageCurrent = $(this).text();
				    	$(this).click(function(){
				    		$('.page-current-number em').text(pageCurrent);
				    	});
				    });
					});
				}
				adminTableSort(10)
				$('.table-show').change(function(){
					adminTableSort($(this).val())
				})

				var pagesAll = $(document).find('.content-sort'),
						pageNumbersCurrent = $('.table-show').val();
				$('.table-search').keyup(function(){
					if($(this).val() != ''){
						adminTableSort(pagesAll.length);
					}else{
						adminTableSort(pageNumbersCurrent);					
					}
				});

				var adminTableSearch = function(){
					var sortLine = $('.content-sort'),
							tableSearch = $('.table-search')
					sortLine.each(function(){
						var $this = $(this);
						var matchContent = $(this).text();
						matchContent = matchContent.toLowerCase();
						tableSearch.keyup(function(){
							$this.fadeIn(80)
							var searchContent = $(this).val();	
							if(matchContent.search(searchContent) >= 0){
								$this.fadeIn(80)
							}else{								
								$this.fadeOut(80)							
							}
						});						
					});
				}();

				var adminValid = function(){
					var validLink = $('.content-cell ul li a');

					validLink.each(function(){
						if($(this).hasClass('modify-button')){
							return false;
						}else{
							var action = $(this).children('em').text(),
								controller = $(this).attr('href'),
								lineName = $(this).parent().parent().parent().parent('.content-table-row').find('.username').children().text()

							$(this).click(function(e){
								e.preventDefault();
								$('.action-name').text(action);
								$('.user-target').text(lineName);
								$('.box-valid a').attr('href', controller);
								$('.admin-valid').fadeIn(150);
							});

							$('.admin-valid').click(function(){
								$(this).fadeOut(150);
							});
						}
					});	
				}
				adminValid();

				var alphabetSort = function(){
					var headerCell = $('.content-table-header .content-cell');

					headerCell.each(function(){
						var lines = $('.content-sort'),
								underCell = $('.'+$(this).attr('id'));
						$(this).click(function(){
							var sortAlphabetical = function(a, b) {
					      return a.innerHTML.toLowerCase().localeCompare(b.innerHTML.toLowerCase());
					    }
					    var sortAnalphabetical = function(a, b) {
					      return b.innerHTML.toLowerCase().localeCompare(a.innerHTML.toLowerCase());
					    }

					    if($(this).hasClass('reversed-sort')){
					    	$('.content-table-header .content-cell').removeClass('reversed-sort');
					    	underCell.sort(sortAnalphabetical);
					    }else{
					    	$('.content-table-header .content-cell').addClass('reversed-sort');
					    	underCell.sort(sortAlphabetical);
					    }
					    adminTableSort(underCell.length);
					    $('.content-sort').removeClass('odd')
					    $('.content-sort-table .content-sort').remove();
					    for (var i = 0; i < underCell.length; i++){
					     	if($(underCell[i]).parent().hasClass('content-sort')){
					     		$('.content-sort-table').append($(underCell[i]).parent());
					     	}
					    }
					    adminTableSort($('.table-show').val());
					    $('.content-sort:odd').addClass('odd');
					    adminValid();
						});
					});
				}();

				var adminForms = function(){
					$('.admin-content-content .d-row').each(function(){
						$(this).append('<div class="clear"></div>')
					});

					$('.admin-container .d-row').each(function(){
						$(this).addClass('clear');
					});

					$('.checkbox-label').each(function(){
						$(this).click(function(){
							if($(this).hasClass('checked')){
								$(this).removeClass('checked');
							}else{
								$(this).addClass('checked');
							}
						});
					});
					$('.radio-label').each(function(){
						$(this).click(function(){
							var otherLabel = $(this).parent().parent().parent('fieldset').find('label');
							otherLabel.removeClass('checked');
							$(this).addClass('checked');
						});
					});

					$('.file-button').each(function(){
						var fileInput = $(this).next('input'),
								preUploadNone = $(this).parent().find('.pre-uploaded-file span');
								preUploadItem = $(this).parent().find('.prefile-item');
								preUploadText = $(this).parent().find('.prefile-name');
						$(this).click(function(){
							fileInput.click();
						});
						fileInput.change(function(){
							preUploadNone.fadeOut(150);
							preUploadText.text($(this).val());
							preUploadItem.fadeIn(150);
						});
					});
				}();	

			}

			var notifications = function(){
				var notifs = $(document).find('.notification-bloc');
				var notifsItems = $(document).find('.notification');
				if(notifs.length >= 1){
					notifs.addClass('open');
					for(var i = 0; i < notifsItems.length; i++){
						$(notifsItems[i]).delay(1500).fadeIn(150);
						$(notifsItems[i]).css('transition-delay', 1 + (i*0.1) + 's');
						setTimeout(function(){ notifs.fadeOut(150); }, 1000 * notifsItems.length + 2000);
					}
				}
			}

			var todo = function(){
				var todoOpenning = function(){
					var todoProject = $('.todo-project');
					todoProject.each(function(){
						var openButton = $(this).find('.todo-project-open'),
								openButtonIcon = $(this).find('.todo-project-open i'),
								projectContent = $(this).find('.todo-project-content');
						openButton.click(function(){
							if(projectContent.hasClass('open')){
								projectContent.removeClass('open').slideUp(150);
								openButtonIcon.removeClass('fa-minus').addClass('fa-plus');
							}else if(projectContent.hasClass('open-default')){
								projectContent.removeClass('open-default').slideUp(150);
								openButtonIcon.removeClass('fa-minus').addClass('fa-plus');
							}else{
								$('.todo-project-content').removeClass('open').slideUp(150);
								$('.todo-project-open i').removeClass('fa-minus').addClass('fa-plus');
								projectContent.addClass('open').slideDown(150);
								openButtonIcon.removeClass('fa-plus').addClass('fa-minus');
							}
						});
					});
					$('.todo-project-run').each(function(){
						$(this).find('.tpr-bloc:last').addClass('no-b');
					});
				}();
			}

			var societyModule = function(){
				var societyMenuFix = function(){
					var societyMenu = $('.society-admin-menu'),
							societyLis = societyMenu.find('li');
					if(societyLis.length >= 9){
						societyMenu.addClass('scrollable');
					}
				}();

				var societyShortcuts = function(){
					$('.admin-container .society-shortucts').each(function(){
						$(this).find('.d-col:first').addClass('no-p-l');
					});
				}();
			}

			var chatModule = function(){

				var chatBoxPosition = function(){
					var chatBoxes = $(document).find('.direct-chat'),
							chatBoxWidth = $('.direct-chat').width();

					for(var i = 0; i < chatBoxes.length; i++){
						$(chatBoxes[i]).css('right',(chatBoxWidth * i) + (7*i) + 7 + 'px' );
					}
				}

				var chatToggle = function(){
					var slideSpeed = 80,
							chatToggleButton = $('.direct-chat .close-widget'),
							chatRemove = $('.direct-chat .remove-widget');
					chatToggleButton.each(function(){
						var chatBox = $(this).parent().parent().parent('.direct-chat'),
								chatMain = chatBox.find('.box-main-container'),
								toggleIcon = $(this).children('.toggle-icon');
						$(this).click(function(){
							if(chatBox.hasClass('open')){
								chatBox.removeClass('open');
								chatMain.slideUp(slideSpeed);
								toggleIcon.removeClass('fa-minus').addClass('fa-plus');
							}else{
								chatBox.addClass('open');
								chatMain.slideDown(slideSpeed);
								toggleIcon.removeClass('fa-plus').addClass('fa-minus');
							}
						});
					});
					chatRemove.each(function(){
						var removeWidget = $(this).parent().parent().parent('.direct-chat');
						$(this).click(function(){
							removeWidget.remove();
							chatBoxPosition();
						});
					});
				}

				var chatLoad = function(){
					var chatBoxBuilder = '<div class="box box-primary direct-chat direct-chat-primary">\
																  <div class="box-header with-border">\
																    <h3 class="box-title">Direct Chat</h3>\
																    <div class="box-tools pull-right">\
																      <span data-toggle="tooltip" title="3 New Messages" class="badge bg-light-blue">3</span>\
																      <button type="button" class="btn btn-box-tool close-widget" data-widget="collapse"><i class="fa fa-plus toggle-icon"></i>\
																      </button>\
																      <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\
																        <i class="fa fa-comments"></i></button>\
																      <button type="button" class="btn btn-box-tool remove-widget" data-widget="remove"><i class="fa fa-times"></i></button>\
																    </div>\
																  </div>\
																  <!-- /.box-header -->\
																  <div class="box-main-container">\
																    <div class="box-body">\
																      <!-- Conversations are loaded here -->\
																      <div class="direct-chat-messages">\
																        <!-- Message. Default to the left -->\
																        <div class="direct-chat-msg">\
																          <div class="direct-chat-info clearfix">\
																            <span class="direct-chat-name pull-left">Alexander Pierce</span>\
																            <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\
																          </div>\
																          <!-- /.direct-chat-info -->\
																          <img class="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image"><!-- /.direct-chat-img -->\
																          <div class="direct-chat-text">\
																            Is this template really for free? That is unbelievable!\
																          </div>\
																          <!-- /.direct-chat-text -->\
																        </div>\
																        <!-- /.direct-chat-msg -->\
																        <!-- Message to the right -->\
																        <div class="direct-chat-msg right">\
																          <div class="direct-chat-info clearfix">\
																            <span class="direct-chat-name pull-right">Sarah Bullock</span>\
																            <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\
																          </div>\
																          <!-- /.direct-chat-info -->\
																          <img class="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image"><!-- /.direct-chat-img -->\
																          <div class="direct-chat-text">\
																            You better believe it!\
																          </div>\
																          <!-- /.direct-chat-text -->\
																        </div>\
																        <!-- /.direct-chat-msg -->\
																      </div>\
																      <!--/.direct-chat-messages-->\
																      <!-- Contacts are loaded here -->\
																      <div class="direct-chat-contacts">\
																        <ul class="contacts-list">\
																          <li>\
																            <a href="#">\
																              <img class="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Image">\
																              <div class="contacts-list-info">\
																                    <span class="contacts-list-name">\
																                      Count Dracula\
																                      <small class="contacts-list-date pull-right">2/28/2015</small>\
																                    </span>\
																                <span class="contacts-list-msg">How have you been? I was...</span>\
																              </div>\
																              <!-- /.contacts-list-info -->\
																            </a>\
																          </li>\
																          <!-- End Contact Item -->\
																        </ul>\
																        <!-- /.contatcts-list -->\
																      </div>\
																      <!-- /.direct-chat-pane -->\
																    </div>\
																    <!-- /.box-body -->\
																    <div class="box-footer">\
																      <form action="#" method="post">\
																        <div class="input-group">\
																          <input type="text" name="message" placeholder="Type Message ..." class="form-control">\
																              <span class="input-group-btn">\
																                <button type="submit" class="btn btn-primary btn-flat">Send</button>\
																              </span>\
																        </div>\
																      </form>\
																    </div>\
																    <!-- /.box-footer-->\
																  </div>\
																</div>'
					var chatLast = $('.comments ul li');
					chatLast.each(function(){
						$(this).click(function(){
							$('.chat-bottom-container').addClass('on')							
							$('.chat-bottom-container').append(chatBoxBuilder);
							chatBoxPosition();
						});
					});
				}();
			}

			var projectsModule = function(){
				var projectsListTools = function(){
					var projectToolsButton = $('.main-header-open-button');
					var projectTools = $('.projetcs-header-icons')

					projectToolsButton.click(function(){
						if(projectTools.hasClass('open')){
							projectTools.removeClass('open').fadeOut(150);
						}else{
							projectTools.addClass('open').fadeIn(150);
						}
					});	
				}();
				var projectList = function(){

					var project = $('.projects-list ul li a.main-link');

					project.each(function(){

						var	toProject = $(this).parent().children('.toproject'),
								projectParent = $(this).parent('li'),
								href = $(this).attr('href'),
								links = toProject.find('.view-project');

						links.attr('href',href);
						$(this).append('<div class="clear"></div>');
						$(this).click(function(e){
							e.preventDefault();
							if($(this).hasClass('selected')){
								$('.projects-list ul li a').removeClass('selected');
								$('.projects-list ul li').removeClass('selected');
								$('.toproject').removeClass('selected');
								$(this).removeClass('selected');
								projectParent.removeClass('selected');
								toProject.removeClass('selected');
							}else{
								$('.projects-list ul li a').removeClass('selected');
								$('.projects-list ul li').removeClass('selected');
								$('.toproject').removeClass('selected');
								$(this).addClass('selected');
								projectParent.addClass('selected');
								toProject.addClass('selected');
							}
						});
					})


					
				}();

				var projectNav = function(){
					$('.project-nav-button').click(function(){
						if($('.project-nav ul').hasClass('open')){
							$('.project-nav ul').removeClass('open').slideUp(150);
						}else{
							$('.project-nav ul').addClass('open').slideDown(150)
						}
					});
				}();

				var progressCanvas = function(){
					var progressContent = $('.progress-content');		
					
					progressContent.each(function(){
						var pi = Math.PI,
								min = 0,
								max = 100,
								lastLevel = $(this).attr('data-lastprogress'),
								progressLevel = $(this).children('span').attr('data-progress'),
								lastRatio = (lastLevel - min) / (max - min),
								ratio = (progressLevel - min) / (max - min),
								circle = $('<canvas class="canvas-0" width="200px" height="200px"></canvas>'),
								color = $('<canvas class="canvas-1" width="200px" height="200px"></canvas>'),
								ctxci = circle[0].getContext('2d'),
								ctxco = color[0].getContext('2d');

						$(this).find('.prev-progress span').append(lastLevel)
						$(this).find('span em').append(progressLevel);
						$(this).append(color);
						$(this).append(circle);

						//path circle
						ctxci.beginPath();
						ctxci.arc(100,100,90,-1/2*pi,(lastRatio *2*pi) - (1/2*pi));
						ctxci.lineWidth = 14;
						ctxci.strokeStyle = '#56bfb5';
						ctxci.stroke();

						//path color
						ctxco.beginPath();
						ctxco.arc(100,100,90,-1/2*pi,(ratio *2*pi) - (1/2*pi));
						ctxco.lineWidth = 14;
						ctxco.strokeStyle = '#6FD5CB';
						ctxco.stroke();

						var sprintFunc = function(){
							var sprints = $('.sprints-container').find('.sprint'),
									sprintWidth = 100 / sprints.length,
									sprintBar = $('.sprint-progressbar'),
									sprintMarker = $('.sprint-marker'),
									sprintCover = $('.sprint-cover');

							$('.sprint').each(function(){
								$(this).css('width', sprintWidth+'%');
							});


							var actualSprint = Math.floor(progressLevel * sprints.length / 100);
							actualSprint += 1

							$('.actual-sprint em').append(actualSprint);

							sprintCover.css('width', 100 - progressLevel + '%');
							sprintBar.css('right', 100 - progressLevel + '%');
							sprintMarker.css('right', 100 - progressLevel + '%');
							sprintMarker.addClass('sprint-'+ actualSprint);

						}();

					});
				}();
			}

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
				toggleItem(sideComment, 'open')

				closeSideComment.click(function(){
					sideComment.removeClass('open');
					sideCommentToggle.hide();
				});
				sideCommentToggle.click(function(){
					$(this).hide();
					sideComment.removeClass('open');
				});
			};

			var backlogsModule = function(){
				var backlogMenu = function(){
					var bmButton = $('.backlog-mobile-menu');
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
					var bmButton = $('.backlog-story-mobile-menu');
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

				var tasksCount = function(){
					var backlog = $('.backlog')
					backlog.each(function(){
						var tasksNum = $(this).find('.backlog-story');
						if(tasksNum.length >= 1){
							$(this).find('.backlog-ico').append('<div class="task-count">'+tasksNum.length+'</div>');
						}
					});

				}();

				var addTasks = function(){
					var buttonAdd = $('.backlog-buttons .fa-plus-circle');
					buttonAdd.each(function(){
						var userStoryTitle = $(this).parent().parent().parent().find('.backlog-name p');
						$(this).click(function(){
							$('.addtask').text('Ajouter une tache dans : '+ userStoryTitle.text());
							$('.task-darker').fadeIn(150);
							$('.add-task-form').fadeIn(150);							
						});
					});
					$('.task-darker').click(function(){
						$(this).fadeOut(80);
						$('.add-task-form').fadeOut(80);							
					});
				}();
			}

			var backlogSideComment = function(){
				var backlogSideCommentButton = $(document).find('.open-side-comments');
				backlogSideCommentButton.each(function(){
					var sideCommentHier = $(this).parent().parent().parent().find('.side-comments'),
							backlogCommentTitle = $(this).parent().parent().find('.backlog-name p');
					$(this).click(function(){
						sideCommentModule($(this), sideCommentHier);
					});
				});
			}

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

					// tabs switch
					var tabsButton = $(this).find('.tabs-header ul li');
					tabsButton.each(function(){
						var id = $(this).data('tabs')
						$(this).click(function(){
							$('.tabs-header ul li').removeClass('active');
							$(this).addClass('active');
							$('.tabs').removeClass('active');
							$('#tab-'+id).addClass('active');
						});
					});
				})
			}

			var ajaxModule = function(){				
				$('.add-story').each(function(){
					var $this = $(this),
							loadButton = $(this).find('.add-story-loader');
					loadButton.click(function(){
						/*$.ajax({

						})*/
					});
				});
			}

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
				var openTicket = function(){
					var form = $('.new-ticket-form');
					$('.new-ticket-button').click(function(e){
						e.preventDefault();
						form.slideDown(80);
						$('.new-ticket-form form').slideDown(80);
						$(document).mouseup(function(e){
					    if ($('.new-ticket-form').has(e.target).length === 0){
					      $('.new-ticket-form form').slideUp(80);		    	
					    }
				    });
					});
					$('.new-ticket-form i.fa-times').click(function(){
						form.slideUp(80);
					})
					$('.new-ticket-form p').click(function(){
						$('.new-ticket-form form').slideDown(80);
					})


				}();
			}
				

			var interactionsToLoad = function(){
				$('.add-story-loader').each(function(){
				})
	      backlogsModule();
        //tabsModule();
        backlogSideComment();
        //ajaxModule();
        //sprintsModule();
        //ticketsModule;
	    }

			$(".backlogs").click(function(){
			 	$('.tabs-content').load('tabs.php');
			 	loadWait = window.setTimeout(interactionsToLoad, 300);
			});

			$(".backlogs").click();

	//execution

	infoUser();
	newPost();
	wallImgSorter();
	addFile();
	sideMenu();
	teamTab();
	openPostAction();
	quotePost();
	profilContent();
	changeProfilImgs();
	postEdit();
	textareaRegexp();
	profilEdit();
	addSidebarItem();
	channels();
	administrationContent();
	notifications();
	todo();
	societyModule();
	chatModule();
	projectsModule();
	backlogsModule();
	tabsModule();
	sprintsModule();
	ticketsModule();

	var responsive = function(){		
		if(windowWidth < 1100){			
			mobileInfoShow();
		}else if(windowWidth > 1100){	
			$('.main').removeClass('padded');
			wallImgSizer();
		}		

		/*if(windowWidth > 720){
			var profilPageHeight = $('.profil-sider').height() + 15 +'px';
			$('.profil-main').css('height', profilPageHeight);
		}*/

		if(windowWidth < 800){
			logoContainer.attr('src','ressources/images/logo-mobile.png');
		}else if(windowWidth < 800){
			logoContainer.attr('src','ressources/images/logo.png');
		}
	}

	$(document).ready(function(){
		responsive();		
	});

	$(window).resize(function(){
		windowWidth = $(window).width();
		responsive();	
	});

});