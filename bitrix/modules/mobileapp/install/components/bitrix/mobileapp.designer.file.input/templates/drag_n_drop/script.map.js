{"version":3,"file":"script.min.js","sources":["script.js"],"names":["window","BlogBFileDialog","BlogBFileDialogUniqueID","arParams","this","dialogName","agent","appCode","uploadFileUrl","upload_path","id","getID","enabled","controller","fileInput","hAttachEvents","BX","delegate","InitAgent","msg","dropAutoUpload","CID","multiple","caller","classes","uploaderParent","uploader","tpl_simple","tpl_extended","selector","selector_active","doc_prefix","placeholder","findChild","className","FileUploadAgent","addCustomEvent","ShowUploadedFile","StopUpload","onCustomEvent","parentNode","debug","prototype","Date","getTime","uploadResult","element_id","inputName","length","hidden","create","props","type","name","value","appendChild","CreateFileRow","_clearPlace","ShowUploadError","upload_error","result","res","mode","element_content_type","indexOf","element_image","element_thumbnail","tpl","template","node","tplFileRow","newNode","clone","span","i","children","nodeType","setAttribute","closeControl","bind","control","parent","cleanNode","AddNodeToPlaceholder","AddRowToPlaceholder","GetUploadDialog","BlogBFileDialogUploader","nodes","hasOwnProperty","innerHTML","_addUrlParam","url","param","LoadDialogs","dialogs","dlgs","setTimeout","mID","match","RegExp","remove","data","fileID","app_code","sessid","bitrix_sessid","cid","mfi_mode","ajax","post","BlogBFileDialogDispatcher","loadScript","isElementNode","target","dropbox","DD","dropFiles","supported","FormData","isSupported","hExpandUploader","proxy","ExpandUploader","Unbind","removeCustomEvent","WDUploaded","WDUploadInProgress","documentExists","fileDropped","parentID","CreateElements","isDomNode","fileInputID","fileList","__form","BindUploadEvents","uniqueID","Math","floor","random","iframeName","iframe","style","display","document","body","iframeUpload","form","method","action","enctype","encoding","Callback","GetUploadFileName","not_customized","custom","fileName","substr","lastIndexOf","fileNode","file","files","errorText","success","storage","element_name","element_size","fileSize","element_url","fileURL","content_type","fileContentType","img_thumb_src","fileSrc","replace","str","util","urlencode","img_source_src","messages","DoNothing","uploadDialog","UploadResponse","evt","responseJSONStr","unbind","UploadLeave","onError","UploadResponseIframe","e","event","UploadInterrupt","UploadNotDone","returnValue","UpdateListFiles","_this","j","CallSubmit","GetInputData","elements","concat","findChildren","tag","el","disabled","toLowerCase","checked","l","options","Array","selected","push","SetFileInput","mfi_save","onProgress","arConstParams","fileNodes","fd","item","append","Object","keys","k","key","cons","send","ajaxdata","fid","submit","percent","isNaN","top","MFIDD","params","loadCSS","browser","IsIE","status","loaded","variant","fileInputName","loading","message","file_exists","access_denied","fx","show","time","hide"],"mappings":"CAAA,WACA,GAAIA,OAAOC,gBACV,MACDD,QAAOE,0BACPF,QAAOC,gBAAkB,SAASE,GAEjCC,KAAKC,WAAa,mBAClBD,MAAKE,MAAQ,KACbF,MAAKG,QAAUJ,EAASI,OACxBH,MAAKI,cAAgBL,EAASM,WAE9BL,MAAKM,KAAQP,EAAS,MAAQA,EAAS,MAAQC,KAAKO,OACpDP,MAAKQ,QAAU,IAEfR,MAAKS,aAAiBV,EAASU,WAAeV,EAASU,WAAa,IACpET,MAAKU,UAAYX,EAASW,SAC1BX,GAASY,cAAgBC,GAAGC,SAASb,KAAKc,UAAWd,KAErDA,MAAKe,IAAMhB,EAASgB,GACpBf,MAAKgB,eAAiBjB,EAASiB,cAC/BhB,MAAKiB,IAAMlB,EAASkB,GACpBjB,MAAKkB,WAAanB,EAASmB,QAE3BnB,GAASoB,OAASnB,IAClBD,GAASqB,SACRC,eAAmB,gBACnBC,SAAa,oBACbC,WAAe,cACfC,aAAiB,gBACjBC,SAAa,gBACbC,gBAAoB,uBAErB3B,GAAS4B,WAAa,QACtB5B,GAAS6B,YAAchB,GAAGiB,UAAU7B,KAAKS,YAAaqB,UAAa,0BAA2B,KAC9F9B,MAAK2B,WAAa5B,EAAS4B,UAE3B,MAAMf,GAAGmB,gBAAiB,CACzB/B,KAAKE,MAAQ,GAAIU,IAAGmB,gBAAgBhC,EACpCa,IAAGoB,eAAehC,KAAM,mBAAoBY,GAAGC,SAASb,KAAKiC,iBAAkBjC,MAC/EY,IAAGoB,eAAehC,KAAM,aAAcY,GAAGC,SAASb,KAAKkC,WAAYlC,MACnEY,IAAGuB,cAAcvB,GAAGZ,KAAKS,WAAW2B,YAAa,gCAAiCpC,WAC5E,CACNY,GAAGyB,MAAM,gHACR,2DAIHzC,QAAOC,gBAAgByC,UAAU/B,MAAQ,WACxC,MAAO,IAAK,GAAIgC,OAAOC,UAGxB5C,QAAOC,gBAAgByC,UAAUxB,UAAY,SAASZ,GAErD,GAAIF,KAAKS,WAAY,CACpBP,EAAM0B,YAAchB,GAAGiB,UAAU7B,KAAKS,YAAaqB,UAAa,0BAA2B,OAI7FlC,QAAOC,gBAAgByC,UAAUL,iBAAmB,SAAS/B,GAE5DF,KAAKE,MAAQA,CACb,IAAIuC,GAAevC,EAAMuC,YAEzB,IAAIA,GAAiBA,EAAaC,WAAa,EAAI,CAClD,KAAMxC,EAAMyC,WAAazC,EAAMyC,UAAUC,OAAS,EAAG,CACpD,GAAIC,GAASjC,GAAGkC,OAAO,SACtBC,OACCzC,GAAM,WAAWmC,EAAaC,WAC9BM,KAAQ,SACRC,KAAQ/C,EAAMyC,WAAa3C,KAAKkB,SAAW,KAAO,IAClDgC,MAAST,EAAaC,aAGxBxC,GAAMO,WAAW0C,YAAYN,GAE9B7C,KAAKoD,cAAcX,EACnBvC,GAAMmD,aAEN,IAAIrD,KAAKS,YAAcT,KAAKS,WAAW2B,WACtCxB,GAAGuB,cAAcnC,KAAKS,WAAW2B,WAAY,uBAAwBK,EAAczC,WAE9E,CACNE,EAAMoD,gBAAgBtD,KAAKe,IAAIwC,aAE/B,IAAIvD,KAAKS,YAAcT,KAAKS,WAAW2B,WACtCxB,GAAGuB,cAAcnC,KAAKS,WAAW2B,WAAY,qBAIhDxC,QAAOC,gBAAgByC,UAAUc,cAAgB,SAASI,GAEzD,GAAIC,GAAMD,CACV,IAAIE,GAAO,MACX,MAAOD,EAAIE,sBAAyBF,EAAIE,qBAAqBC,QAAQ,WAAa,KAC/EH,EAAII,eAAkBJ,EAAII,cAAcjB,OAAS,KACjDa,EAAIK,mBAAsBL,EAAIK,kBAAkBlB,OAAS,EAAK,CAChEc,EAAO,QAGR,GAAIK,GAAMnD,GAAG,QAAU8C,EAAO,YAE9B9C,IAAGoD,SAASD,EAAKnD,GAAGC,SAAS,SAASoD,GACrCjE,KAAKkE,WAAWD,EAAMR,IACpBzD,MACH,IAAImE,GAAUvD,GAAGwD,MAAML,EAEvB,IAAIL,GAAQ,QAAS,CACpB,GAAIW,GAAO,IACX,KAAKC,EAAE,EAAEA,EAAEH,EAAQI,SAAS3B,OAAO0B,IACnC,CACCD,EAAOF,EAAQI,SAASD,EACxB,IAAID,EAAKG,UAAY,EACpB,MAGFH,EAAKI,aAAa,KAAMzE,KAAK2B,WAAa6B,EAAOd,WACjD,IAAIgC,GAAe9D,GAAGiB,UAAUwC,GAAOvC,UAAa,yBAA0B,KAC9ElB,IAAG+D,KAAKD,EAAc,QAAS9D,GAAGC,SACjC,WACC,GAAI+D,GAAUF,CACd,IAAIG,GAASD,EAAQxC,UACrBpC,MAAKE,MAAMgC,WAAW2C,EACtBjE,IAAGkE,UAAUD,EAAQ,OACnB7E,MACJA,MAAKE,MAAM6E,qBAAqBV,OAC1B,CACNF,EAAQM,aAAa,KAAMzE,KAAK2B,WAAa6B,EAAOd,WACpD1C,MAAKE,MAAM8E,oBAAoBb,GAEhC,MAAOA,GAGRvE,QAAOC,gBAAgByC,UAAU2C,gBAAkB,SAAS/E,GAG3D,MAAO,IAAIgF,yBAAwBlF,KAAME,GAG1CN,QAAOC,gBAAgByC,UAAU4B,WAAa,SAASiB,EAAO1B,GAE7D,IAAKnD,KAAM6E,GACX,CACC,IAAMA,EAAMC,eAAe9E,IAC1B,QAED,IAAI2D,GAAOkB,EAAM7E,GAEjB,IAAKA,IAAM,WACRmD,EAAII,eAAkBJ,EAAII,cAAcjB,OAAS,KACjDa,EAAIK,mBAAsBL,EAAIK,kBAAkBlB,OAAS,EAC5D,CACCqB,EAAKQ,aAAa,MAAOhB,EAAII,cAC7BI,GAAKQ,aAAa,MAAOhB,EAAIK,uBAG9B,CACC,KAAOL,EAAI,WAAWnD,IACrB2D,EAAKoB,UAAY5B,EAAI,WAAWnD,MAKpCV,QAAOC,gBAAgByC,UAAUgD,aAAe,SAASC,EAAKC,GAE7D,IAAKD,EACJ,MAAO,KACR,IAAIA,EAAI3B,QAAQ4B,KAAW,EAC1BD,IAASA,EAAI3B,QAAQ,OAAS,EAAK,IAAM,KAAO4B,CACjD,OAAOD,GAGR3F,QAAOC,gBAAgByC,UAAUmD,YAAc,SAASC,GAEvD,KAAM1F,KAAKE,MACVF,KAAKE,MAAMuF,YAAYC,OACnB,CACJ,GAAIC,GAAOD,CACXE,YAAWhF,GAAGC,SAAS,WAAYb,KAAKyF,YAAYE,IAAS3F,MAAO,MAItEJ,QAAOC,gBAAgByC,UAAUJ,WAAa,SAAShC,EAAO2E,GAE7D7E,KAAKE,MAAQA,CACbI,IAAK,KACLuF,KAAMhB,EAAOvE,GAAGwF,MAAM,GAAIC,QAAO/F,KAAK2B,WAAa,UACnD,MAAMkE,IAAK,CACVvF,GAAKuF,IAAI,GAGV7F,KAAKgG,OAAO1F,IAGbV,QAAOC,gBAAgByC,UAAU0D,OAAS,SAAU1F,GAEnD,GAAIN,KAAKS,YAAcT,KAAKS,WAAW2B,WACtCxB,GAAGuB,cAAcnC,KAAKS,WAAW2B,WAAY,sBAAuB9B,EAAIN,MAEzE,IAAIiG,IACHC,OAAQ5F,EACR6F,SAASnG,KAAKG,QACdiG,OAAQxF,GAAGyF,gBACXC,IAAKtG,KAAKiB,IACVsF,SAAU,SAEX3F,IAAG4F,KAAKC,KAAKzG,KAAKI,cAAe6F,GAGlCrG,QAAO8G,0BAA4B,SAASjG,GAE3CT,KAAKM,GAAKN,KAAKO,OACfP,MAAKS,WAAaA,CAElBG,IAAG+F,WAAW,kCAAmC/F,GAAGC,SAAS,WAC5D,GAAID,GAAGoC,KAAK4D,cAAc5G,KAAKS,aAAeT,KAAKS,WAAW2B,YAAcpC,KAAKS,WAAW2B,WAAWA,WACvG,CACC,GAAIyE,GAAS7G,KAAKS,WAAW2B,WAAWA,UACxCpC,MAAK8G,QAAU,GAAIlG,IAAGmG,GAAGC,UAAUH,EACnC,IAAI7G,KAAK8G,SAAW9G,KAAK8G,QAAQG,aAAerG,GAAG4F,KAAKU,SAASC,cAAe,CAC/EnH,KAAKoH,gBAAkBxG,GAAGyG,MAAMrH,KAAKsH,eAAgBtH,KACrDY,IAAGoB,eAAehC,KAAK8G,QAAS,YAAa9G,KAAKoH,gBAClDxG,IAAGoB,eAAe6E,EAAQ,sBAAuBjG,GAAGC,SAASb,KAAKuH,OAAQvH,UAG1EA,OAGJJ,QAAO8G,0BAA0BpE,UAAU/B,MAAQ,WAClD,MAAO,IAAK,GAAIgC,OAAOC,UAGxB5C,QAAO8G,0BAA0BpE,UAAUgF,eAAiB,WAE3D1G,GAAGuB,cAAcvB,GAAGZ,KAAKS,WAAW2B,YAAa,4BAA6B,SAI/ExC,QAAO8G,0BAA0BpE,UAAUiF,OAAS,WAEnD3G,GAAG4G,kBAAkBxH,KAAK8G,QAAS,YAAa9G,KAAKoH,iBAItDxH,QAAOsF,wBAA0B,SAASnF,EAAUG,GAEnDF,KAAKyH,WAAa,KAClBzH,MAAK0H,mBAAqB,KAC1B1H,MAAK2H,eAAiB,KACtB3H,MAAK4H,YAAc,KACnB5H,MAAKG,QAAUJ,EAASI,OACxBH,MAAKmB,OAASpB,CACdC,MAAKE,MAAQA,CACbF,MAAK6H,SAAW7H,KAAKE,MAAMI,EAC3BN,MAAKM,GAAKN,KAAKmB,OAAOZ,OAEtBP,MAAKe,IAAMhB,EAASgB,GACpBf,MAAKgB,eAAiBjB,EAASiB,cAC/BhB,MAAKI,cAAgBL,EAASK,aAC9BJ,MAAKiB,IAAMlB,EAASkB,GAEpBjB,MAAK8H,gBACL9H,MAAKU,YAAeR,EAAMQ,UAAYR,EAAMQ,UAAcE,GAAGoC,KAAK+E,UAAU7H,EAAM8H,aAAgB9H,EAAM8H,YAAcpH,GAAGb,EAASW,UAClI,IAAIE,GAAGoC,KAAK+E,UAAU/H,KAAKU,WAAY,CACtCV,KAAKU,UAAUuC,KAAO,cAEvBjD,KAAKiI,SAAWjI,KAAKkI,MAErBtH,IAAG+F,WAAW,kCAAmC/F,GAAGC,SACnD,WACC,GAAIiG,GAAU,GAAIlG,IAAGmG,GAAGC,SACxB,IAAIF,GAAWA,EAAQG,aAAerG,GAAG4F,KAAKU,SAASC,cACvD,CACCnH,KAAK8G,QAAUA,EAEhB9G,KAAKE,MAAMiI,iBAAiBnI,OAC1BA,OAGLJ,QAAOsF,wBAAwB5C,UAAUwF,eAAiB,WAEzD,GAAIM,EACJ,GAAG,CACFA,EAAWC,KAAKC,MAAMD,KAAKE,SAAW,aAC/B3H,GAAG,UAAYwH,GAEvB,IAAII,GAAa,UAAYxI,KAAKM,EAClC,IAAImI,GAAS7H,GAAGkC,OAAO,UACtBC,OAAQE,KAAMuF,EAAYlI,GAAIkI,GAC9BE,OAAQC,QAAS,SAElBC,UAASC,KAAK1F,YAAYsF,EAC1BzI,MAAK8I,aAAeL,CAEpB,IAAIM,GAAOnI,GAAGkC,OAAO,QACpBC,OACCzC,GAAI,QAAU8H,EACdY,OAAQ,OACRC,OAAQjJ,KAAKI,cACb8I,QAAS,sBACTC,SAAU,sBACVtC,OAAQ2B,GAETE,OAAQC,QAAS,QACjBpE,UACC3D,GAAGkC,OAAO,SACTC,OACCC,KAAM,SACNC,KAAM,SACNC,MAAOtC,GAAGyF,mBAGZzF,GAAGkC,OAAO,SACTC,OACCC,KAAM,SACNC,KAAM,WACNC,MAAOkF,KAGTxH,GAAGkC,OAAO,SACTC,OACCC,KAAM,SACNC,KAAM,MACNC,MAAOlD,KAAKiB,OAGdL,GAAGkC,OAAO,SACTC,OACCC,KAAM,SACNC,KAAM,WACNC,MAAO,cAKX0F,UAASC,KAAK1F,YAAY4F,EAC1B/I,MAAKkI,OAASa,CAEdnJ,QAAO,0BAA4BwI,GAAYxH,GAAGyG,MAAMrH,KAAKoJ,SAAUpJ,MAGxEJ,QAAOsF,wBAAwB5C,UAAU+G,kBAAoB,SAASC,GAErEC,QAAUD,CACVE,GAAW,EACX,IAAIxJ,KAAKU,WAAcV,KAAKU,UAAUwC,MAAMN,OAAS,EAAI,CACxD,GAAI4G,GAAWxJ,KAAKU,UAAUwC,KAC9B,IAAIsG,EAAS5F,QAAQ,OAAS,EAC7B4F,EAAWA,EAASC,OAAOD,EAASE,YAAY,MAAM,OACjD,CACN,GAAIC,GAAW3J,KAAKiI,QACpB,IAAI0B,EAASC,KACZJ,EAAWG,EAASC,KAAKJ,UAAYG,EAASC,KAAK3G,KAErD,MAAOuG,GAGR5J,QAAOsF,wBAAwB5C,UAAU8G,SAAW,SAASS,EAAOzB,EAAU0B,GAE7E,GAAID,EAAMjH,OAAS,EAAG,CACrB,IAAI,GAAI0B,GAAI,EAAGA,EAAIuF,EAAMjH,OAAQ0B,IAAK,CACrC,GAAId,KACJA,GAAOuG,QAAU,IACjBvG,GAAOwG,QAAU,OACjBxG,GAAOd,WAAamH,EAAMvF,GAAG4B,MAC7B1C,GAAOyG,aAAeJ,EAAMvF,GAAGkF,QAC/BhG,GAAO0G,aAAeL,EAAMvF,GAAG6F,QAC/B3G,GAAO4G,YAAcP,EAAMvF,GAAG+F,OAC9B7G,GAAOG,qBAAwBkG,EAAMvF,GAAGgG,aAAeT,EAAMvF,GAAGgG,aAAeT,EAAMvF,GAAGiG,eAExF/G,GAAOK,gBAAoBgG,EAAMvF,GAAGkG,cAAiBX,EAAMvF,GAAGkG,cAAgBX,EAAMvF,GAAGmG,OACvF,MAAMjH,EAAOK,cACZL,EAAOK,cAAgBL,EAAOK,cAAc6G,QAAQ,cAAe,SAASC,EAAK1H,GAAQ,MAAO,IAAMrC,GAAGgK,KAAKC,UAAU5H,IACzHO,GAAOM,oBAAwB+F,EAAMvF,GAAGwG,eAAkBjB,EAAMvF,GAAGwG,eAAgBjB,EAAMvF,GAAGmG,OAC5F,MAAMjH,EAAOM,kBACZN,EAAOM,kBAAoBN,EAAOM,kBAAkB4G,QAAQ,cAAe,SAASC,EAAK1H,GAAQ,MAAO,IAAMrC,GAAGgK,KAAKC,UAAU5H,IAEjIrC,IAAGuB,cAAcnC,KAAM,gBAAiBwD,SAEnC,CACN,GAAIA,KACJA,GAAOuG,QAAU,KACjBvG,GAAOuH,SAAYjB,GAAaA,EAAUlH,OAAS,EAAKkH,EAAY9J,KAAKe,IAAIwC,YAC7E3C,IAAGuB,cAAcnC,KAAM,gBAAiBwD,IAEzC5D,OAAO,0BAA4BwI,GAAYxH,GAAGoK,SAClDpK,IAAGkE,UAAUlE,GAAG,UAAYwH,GAAW,KACvCxH,IAAGkE,UAAUlE,GAAG,QAAUwH,GAAW,KACrCpI,MAAKE,MAAM+K,aAAe,KAG3BrL,QAAOsF,wBAAwB5C,UAAU4I,eAAiB,SAASC,EAAKC,GAEvEpL,KAAK0H,mBAAqB,KAC1B9G,IAAGyK,OAAOzL,OAAQ,eAAgBgB,GAAGyG,MAAMrH,KAAKsL,YAAatL,MAE7D,KAAOoL,GACHA,EAAgBxI,QAAU,EAC9B,CACC5C,KAAKuL,WAIP3L,QAAOsF,wBAAwB5C,UAAUkJ,qBAAuB,SAASL,EAAKC,GAE7EpL,KAAK0H,mBAAqB,KAC1B9G,IAAGyK,OAAOzL,OAAQ,eAAgBgB,GAAGyG,MAAMrH,KAAKsL,YAAatL,OAG9DJ,QAAOsF,wBAAwB5C,UAAUgJ,YAAc,SAASG,GAE/D,GAAIA,GAAIA,GAAK7L,OAAO8L,KACpB,IAAI3K,GAAM,EACV,IAAIf,KAAK0H,mBACR3G,EAAMf,KAAKe,IAAI4K,oBACX,KAAO3L,KAAKyH,YAAezH,KAAKU,WAAcV,KAAKU,UAAUwC,MAAMN,OAAS,EAChF7B,EAAMf,KAAKe,IAAI6K,aAChB,IAAI7K,GAAO,GACX,CACC,GAAI0K,EACHA,EAAEI,YAAc9K,CACjB,OAAOA,GAER,OAGDnB,QAAOsF,wBAAwB5C,UAAUwJ,gBAAkB,SAASjC,GAEnE,GAAI7J,MAAQ6J,EACZ,CACC,GAAIkC,GAAQ/L,IACZ,IAAI6J,EAAMjH,OAAS,EAClB,MACDoJ,GAAI,CACJ,IAAIrC,GAAW3J,KAAKiI,QACpB0B,GAASC,KAAOC,EAAMmC,EAEtBhM,MAAK0H,mBAAqB,IAC1B1H,MAAK4H,YAAc,IACnB5H,MAAKiM,cAIPrM,QAAOsF,wBAAwB5C,UAAU4J,aAAe,SAAS9J,GAEhE,GAAI+J,KACJ,IAAIlG,KACJkG,GAAWA,EAASC,OACnBxL,GAAGyL,aAAajK,GAAakK,IAAO,SAAU,MAC9C1L,GAAGyL,aAAajK,GAAakK,IAAO,YAAa,MACjD1L,GAAGyL,aAAajK,GAAakK,IAAO,UAAW,MAEhD,KAAI,GAAIhI,GAAE,EAAGA,EAAE6H,EAASvJ,OAAQ0B,IAChC,CACC,GAAIiI,GAAKJ,EAAS7H,EAClB,KAAKiI,GAAMA,EAAGC,UAAYD,EAAGtJ,KAAKL,OAAS,EAC1C,QACD,QAAO2J,EAAGvJ,KAAKyJ,eAEd,IAAK,OACL,IAAK,WACL,IAAK,WACL,IAAK,SACL,IAAK,aACJxG,EAAKsG,EAAGtJ,MAAQsJ,EAAGrJ,KACnB,MACD,KAAK,QACJ,GAAGqJ,EAAGG,QACLzG,EAAKsG,EAAGtJ,MAAQsJ,EAAGrJ,KACpB,MACD,KAAK,WACJ+C,EAAKsG,EAAGtJ,MAASsJ,EAAGG,QAAU,IAAI,GAClC,MACD,KAAK,kBACJ,GAAIC,GAAIJ,EAAGK,QAAQhK,MACnB,IAAI+J,EAAI,EAAG1G,EAAKsG,EAAGtJ,MAAQ,GAAI4J,MAC/B,KAAKb,EAAE,EAAGA,EAAEW,EAAGX,IACd,GAAIO,EAAGK,QAAQZ,GAAGc,SACjB7G,EAAKsG,EAAGtJ,MAAM8J,KAAKR,EAAGK,QAAQZ,GAAG9I,MACnC,MACD,SACC,OAGH,MAAO+C,GAGRrG,QAAOsF,wBAAwB5C,UAAU0K,aAAe,SAAStM,GAEhE,KAAOV,KAAKkI,OAAO+E,SAClB,MACD,IAAIjN,KAAKU,WAAaV,KAAKU,WAAaA,EACvCE,GAAGoF,OAAOhG,KAAKU,UAChBV,MAAKkI,OAAO/E,YAAYzC,EACxBV,MAAKU,UAAYA,EAGlBd,QAAOsF,wBAAwB5C,UAAU2J,WAAa,WAErD,KAAOjM,KAAKkI,OAAO+E,SAClB,MACDrM,IAAGuB,cAAcnC,KAAM,eAAgBA,MAEvCY,IAAG+D,KAAK/E,OAAQ,eAAgBgB,GAAGyG,MAAMrH,KAAKsL,YAAatL,MAC3DY,IAAG+D,KAAK3E,KAAK8I,aAAc,OAAQlI,GAAGC,SAASb,KAAKwL,qBAAsBxL,MAE1E,IAAIA,KAAK8G,QAAS,CACjB9G,KAAKkN,WAAW,IAChB,IAAIlN,KAAKU,WAAcV,KAAKU,UAAUmJ,MAAMjH,OAAS,EAAI,CACxD,GAAI+G,GAAW3J,KAAKiI,QACpB0B,GAASC,KAAO5J,KAAKU,UAAUmJ,MAAM,GAGtC,GAAIsD,GAAgBnN,KAAKkM,aAAalM,KAAKkI,OAC3ClI,MAAKoN,WAAapN,KAAKiI,SACvB,KAAK3D,IAAKtE,MAAKoN,UAAW,CACzB,GAAIpN,KAAKoN,UAAU9I,GAAGsF,KAAM,CAC3B,GAAIyD,GAAK,GAAIzM,IAAG4F,KAAKU,QAErB,KAAKoG,OAAQtN,MAAKoN,UAAU9I,GAAG2B,KAC/B,CACCoH,EAAGE,OAAOD,KAAMtN,KAAKoN,UAAU9I,GAAG2B,KAAKqH,OAGxC,KAAOE,UAAaA,OAAOC,KAC3B,CACC,GAAIA,GAAOD,OAAOC,KAAKN,EACvB,KAAK,GAAIO,KAAKD,GACd,CACC,GAAIE,GAAMF,EAAKC,EACf,IAAIE,GAAOT,EAAcQ,EACzBN,GAAGE,OAAOI,EAAKC,QAIjB,CACC,IAAKN,OAAQH,GACb,CACCE,EAAGE,OAAOD,KAAMH,EAAcG,QAIhCD,EAAGE,OAAO,cAAevN,KAAKoN,UAAU9I,GAAGsF,KAC3CyD,GAAGE,OAAO,WAAYvN,KAAKG,QAC3BkN,GAAGQ,KACF7N,KAAKI,cACLQ,GAAGC,SAAS,SAASiN,GACpB9N,KAAKkL,eAAe,KAAM4C,IACxB9N,MACHY,GAAGC,SAASb,KAAKkN,WAAYlN,aAI1B,CACNA,KAAKkN,WAAW,IAChBlN,MAAK0H,mBAAqB,IAC1B,IAAIqG,GAAM/N,KAAKkI,OAAO5H,EACtBM,IAAGoN,OAAOhO,KAAKkI,OAAQ,WAAY,MAIrCtI,QAAOsF,wBAAwB5C,UAAU4K,WAAa,SAASe,GAE9D,GAAIC,MAAMD,GACT,MACDrN,IAAGuB,cAAcnC,KAAM,YAAaiO,IAGrCrO,QAAOsF,wBAAwB5C,UAAUiJ,QAAU,WAElD3K,GAAGuB,cAAcnC,KAAM,iBAAkB+J,QAAS,MAAOgB,SAAU/K,KAAKe,IAAIwC,gBAG7E4K,KAAItO,gBAAkBD,OAAOC,eAC7BsO,KAAIjJ,wBAA0BtF,OAAOsF,uBACrCiJ,KAAIzH,0BAA4B9G,OAAO8G,yBAEvC9G,QAAOwO,MAAQ,SAASC,GACvBzN,GAAG0N,QAAQ,4EACX,KAAM1N,GAAG2N,QAAQC,OACjB,CACC5O,OAAO,SAAWyO,EAAO,QAAU,GAAI3H,2BAA0B2H,EAAO,cACxEzO,QAAO,wBAA0ByO,EAAO,QAAU,WACjDzN,GAAGuB,cAAckM,EAAO,cAAcjM,WAAWA,WAAY,wBAG/D,GAAIqM,GAAUJ,EAAO,YAAc,OAAS,OAAUA,EAAO,YAAc,OAAS,OAAS,QAC7F,IAAII,GAAU,SACbA,EAAUJ,EAAO,cAAc3F,MAAMC,SAAW,OAAS,OAAS,MAEnE,KAAM0F,EAAO,cAAcK,OAC3B,CACCL,EAAO,cAAcK,OAAS,IAC9B,IAAI5H,GAAU,GAAIlG,IAAGmG,GAAGC,UACvB2H,EAAW7H,GAAWA,EAAQG,aAAerG,GAAG4F,KAAKU,SAASC,cAAgB,WAAa,QAE5FgH,KAAI,UAAYE,EAAO,QAAUzO,OAAO,UAAYyO,EAAO,QAAU,GAAIxO,kBACxE6D,KAASiL,EACT1N,IAAQoN,EAAO,OACf/N,GAAO+N,EAAO,MACdhO,YAAgBgO,EAAO,eACvBnN,SAAamN,EAAO,YACpB5N,WAAe4N,EAAO,cACtB1L,UAAc0L,EAAO,aACrB3N,UAAgB,qBAAuB2N,EAAO,OAC9CO,cAAkB,cAClB7N,KACC8N,QAAYjO,GAAGkO,QAAQ,WACvBC,YAAgBnO,GAAGkO,QAAQ,eAC3BvL,aAAiB3C,GAAGkO,QAAQ,gBAC5BE,cAAkBpO,GAAGkO,QAAQ,mBAG/BlO,IAAGqO,GAAGC,KAAKb,EAAO,cAAe,QAASc,KAAK,IAC/CvP,QAAO,UAAYyO,EAAO,QAAQ5I,YAAY,gBAC9C7E,IAAGuB,cAAc,gCAAiCvC,OAAO,UAAYyO,EAAO,SAE5E,MAAOzO,OAAO,wBAA0ByO,EAAO,QAC9CzO,OAAO,wBAA0ByO,EAAO,cAG1C,CACC,GAAII,GAAU,OACb7N,GAAGqO,GAAGC,KAAKb,EAAO,cAAe,QAASc,KAAK,SAE/CvO,IAAGqO,GAAGG,KAAKf,EAAO,cAAe,QAASc,KAAK,SAI/CvP"}