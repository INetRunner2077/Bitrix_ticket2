<?php
if(isset($arResult['ID_BLOCK_CANONICAL']))
{
    $APPLICATION->SetPageProperty('canonical', $arResult['ID_BLOCK_CANONICAL']);
}
