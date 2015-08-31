<?
	$arr = array( 'result' => "success", 'more' => false,'page' => 2,
		'items' => array(
			0 => array('name' => 'name1', 'desc'=>'desc1', 'price'=> 111, 'discount'=> '10', 'old_price'=> 110, 'image' => 'i/t/t1.jpg', 'url' => "#"),
			1 => array('name' => 'name2', 'desc'=>'desc2', 'price'=> 222, 'hit'=>true, 'old_price'=> 220, 'image' => 'i/t/t1.jpg', 'url' => "#"),
			2 => array('name' => 'name3', 'desc'=>'desc3', 'price'=> 333, 'hit'=>true, 'discount'=> '30', 'old_price'=> 330, 'image' => 'i/t/t1.jpg', 'url' => "#"),
			3 => array('name' => 'name4', 'desc'=>'desc4', 'price'=> 444, 'image' => 'i/t/t1.jpg', 'url' => "#"),
		)
	);
	echo json_encode($arr);
?>