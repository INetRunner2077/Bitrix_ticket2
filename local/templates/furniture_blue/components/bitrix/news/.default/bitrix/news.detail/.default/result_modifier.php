<?php
if($arParams['ID_BLOCK_CANONICAL'])
{
    $query  = CIBlockElement::GetList(
    false,
    Array(
        "IBLOCK_ID"=>$arParams['ID_BLOCK_CANONICAL'],
    ),
    false,
    false,
    array (
        'ID',
        'IBLOCK_ID',
        'NAME',
    ),
);

    while($ob = $query->GetNext()){
       $arResult['ID_BLOCK_CANONICAL'] = $ob['NAME'];
    }
    $this->__component->SetResultCacheKeys(array('ID_BLOCK_CANONICAL'));

}
