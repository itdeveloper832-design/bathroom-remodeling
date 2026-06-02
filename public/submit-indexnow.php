<?php
/**
 * IndexNow Submission Script for cPanel (PHP)
 * 
 * Usage:
 * 1. Manual: https://yourdomain.com/submit-indexnow.php?url=https://yourdomain.com/page
 * 2. Sitemap/Cron: https://yourdomain.com/submit-indexnow.php?action=sitemap
 */

header('Content-Type: application/json');

// --- CONFIGURATION ---
$host = "arzhomeremodeling.com";
$key = "da8afcc853004a0e818760ae4b6b668e";
$keyLocation = "https://arzhomeremodeling.com/da8afcc853004a0e818760ae4b6b668e.txt";
$endpoint = "https://api.indexnow.org/indexnow";
// ---------------------

// Handle Manual URL Submission
if (isset($_GET['url'])) {
    $urlList = [$_GET['url']];
    $result = submitToIndexNow($endpoint, $host, $key, $keyLocation, $urlList);
    echo json_encode($result);
    exit;
}

// Handle Sitemap Submission (for Cron Job)
if (isset($_GET['action']) && $_GET['action'] === 'sitemap') {
    // You can fetch URLs from your sitemap.xml if it exists
    // For now, we'll return a message or you can implement sitemap parsing here
    $sitemapUrl = "https://arzhomeremodeling.com/sitemap.xml";
    $xml = simplexml_load_file($sitemapUrl);
    
    if ($xml) {
        $urls = [];
        foreach ($xml->url as $url) {
            $urls[] = (string)$url->loc;
        }
        
        // Batch in 100s
        $batches = array_chunk($urls, 100);
        $totalSuccess = 0;
        foreach ($batches as $batch) {
            $res = submitToIndexNow($endpoint, $host, $key, $keyLocation, $batch);
            if ($res['success']) $totalSuccess += count($batch);
        }
        
        echo json_encode([
            "success" => true,
            "message" => "Sitemap processed. Submitted $totalSuccess URLs in " . count($batches) . " batches."
        ]);
    } else {
        echo json_encode(["success" => false, "error" => "Could not load sitemap.xml"]);
    }
    exit;
}

// Default response
echo json_encode([
    "message" => "IndexNow PHP Script Active",
    "usage" => [
        "manual" => "submit-indexnow.php?url=URL_HERE",
        "sitemap" => "submit-indexnow.php?action=sitemap"
    ]
]);

/**
 * Sends the POST request to IndexNow API using cURL
 */
function submitToIndexNow($endpoint, $host, $key, $keyLocation, $urlList) {
    $data = [
        "host" => $host,
        "key" => $key,
        "keyLocation" => $keyLocation,
        "urlList" => $urlList
    ];

    $ch = curl_init($endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json; charset=utf-8'
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($httpCode == 200 || $httpCode == 202) {
        return ["success" => true, "status" => $httpCode, "submitted" => count($urlList)];
    } else {
        return [
            "success" => false, 
            "status" => $httpCode, 
            "error" => $error ?: "API returned status $httpCode",
            "response" => $response
        ];
    }
}
?>
