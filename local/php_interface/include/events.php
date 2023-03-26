<?php
AddEventHandler("main", "OnBuildGlobalMenu", array("MyClass", "Menu"));

class MyClass
{
function  Menu(&$aGlobalMenu, &$aModuleMenu)
{


global $USER;
    $user = CUser::GetUserGroupList($USER->GetID());

    while($group = $user->Fetch())
    {
        if($group['GROUP_ID'] == 1)
        {
            $isAdmin = true;
        }
        if($group['GROUP_ID'] == 5)
        {
            $isManager = true;
        }

        if(!$isAdmin && $isManager)
        {

            foreach ($aModuleMenu as $key => $item)
            {
               if($item['items_id'] == 'menu_iblock_/news') {

                   $aModuleMenu = [$item];

                   foreach ($item['items'] as $childitem) {

                       if ($childitem['items_id'] == 'menu_iblock_/news/1') {

                           $aModuleMenu[0]['items'] = [$childitem];
                           break;
                       }

                   }
                    break;
               }
               $time = $aGlobalMenu['global_menu_content'];
                $aGlobalMenu = [];
                $aGlobalMenu['global_menu_content'] = $time;

            }

        }

    }
   // echo '<pre>'; print_r($aGlobalMenu); echo '</pre>';

}

}