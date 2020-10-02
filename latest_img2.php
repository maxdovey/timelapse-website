<?php
foreach (glob('GM_DIR02/1920/*.JPG') as $f) {
    # store the image name with the last modification time and imagename as a key
    $list[filemtime($f) . '-' . $f] = $f;
}


$keys = array_keys($list);
sort($keys);                    # sort is oldest to newest,
echo $list[array_pop($keys)];   # Newest

?>
