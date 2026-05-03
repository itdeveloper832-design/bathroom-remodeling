<?php
if (!class_exists('ZipArchive')) {
    die("Error: ZipArchive class not found. Please enable it in cPanel (Select PHP Version -> Extensions).");
}
$zipFile = 'build.zip';
$zip = new ZipArchive;
$res = $zip->open($zipFile);
if ($res === TRUE) {
    $zip->extractTo('.');
    $zip->close();
    echo "SUCCESS";
} else {
    echo "FAILED: Error code $res";
}
?>
