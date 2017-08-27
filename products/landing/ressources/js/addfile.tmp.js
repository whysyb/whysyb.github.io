if(inputCount >= 1){
					$('.input-add').each(function(){
						var parentContainer = $(this).parent().parent(),
								id = $(this).attr('id'),
								linkedLabel = $('.'+id),
								llName = linkedLabel.children('span'),
								tempName = false;
						$(this).click(function(){
							tempName = llName.text();
						});
						$(this).change(function(){
									var fileName = $(this).val(),
									fileNameShorted = fileName.substring(12);
							llName.text(fileNameShorted)
							if(tempName != 'Ajouter une image'){
									inputCount = inputCount
							}else{
								if(inputCount === 4){
									parentContainer.parent().parent().find('h4').append('<span class="max-reach">Nombre d\'images maximum atteint !</span>');
								}else{
									inputCount++
									var li = '<li>\
															<label for="image'+inputCount+'" class="button label-add image'+inputCount+'">\
																<i class="fa fa-picture-o" aria-hidden="true"></i>\
																<span>Ajouter une image</span>\
															</label>\
															<input type="file" class="input-add hide" id="image'+inputCount+'">\
														</li>'
									linkedLabel.parent().after(li)
								}
							}
						});
					});
			}