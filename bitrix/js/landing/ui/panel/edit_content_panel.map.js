{"version":3,"sources":["edit_content_panel.js"],"names":["BX","namespace","SidebarButton","Landing","UI","Button","Panel","ContentEdit","id","data","Content","apply","this","arguments","layout","classList","add","appendFooterButton","BaseButton","text","Loc","getMessage","onClick","Type","isFunction","onSaveHandler","className","attrs","title","onCancelHandler","showedPanel","prototype","constructor","__proto__","show","StylePanel","getInstance","isShown","hide","then","call","bind","appendForm","form","forms","content","appendChild","getNode","checkReadyToSave","formButton","code","empty","fields","length","scrollTo","sidebarButtons","sidebar","forEach","field","fieldButton","selector","child","event","preventDefault","stopPropagation","replaceForm","oldForm","newForm","remove","replace","get","newFormButton","type","compact","enable"],"mappings":"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","file":"edit_content_panel.map.js"}