<?php
require_once('vimeo.php');
session_start();

// Create the object and enable caching
$vimeo = new phpVimeo('CONSUMER_KEY', 'CONSUMER_SECRET');
$vimeo->enableCache(phpVimeo::CACHE_FILE, './cache', 300);

// Clear session
if ($_GET['clear'] == 'all') {
    session_destroy();
    session_start();
}

// Set up variables
$state = $_SESSION['vimeo_state'];
$request_token = $_SESSION['oauth_request_token'];
$access_token = $_SESSION['oauth_access_token'];

// Coming back
if ($_REQUEST['oauth_token'] != NULL && $_SESSION['vimeo_state'] === 'start') {
    $_SESSION['vimeo_state'] = $state = 'returned';
}

// If we have an access token, set it
if ($_SESSION['oauth_access_token'] != null) {
    $vimeo->setToken($_SESSION['oauth_access_token'], $_SESSION['oauth_access_token_secret']);
}

switch ($_SESSION['vimeo_state']) {
    default:

        // Get a new request token
        $token = $vimeo->getRequestToken();

        // Store it in the session
        $_SESSION['oauth_request_token'] = $token['oauth_token'];
        $_SESSION['oauth_request_token_secret'] = $token['oauth_token_secret'];
        $_SESSION['vimeo_state'] = 'start';

        // Build authorize link
        $authorize_link = $vimeo->getAuthorizeUrl($token['oauth_token'], 'write');

        break;

    case 'returned':

        // Store it
        if ($_SESSION['oauth_access_token'] === NULL && $_SESSION['oauth_access_token_secret'] === NULL) {
            // Exchange for an access token
            $vimeo->setToken($_SESSION['oauth_request_token'], $_SESSION['oauth_request_token_secret']);
            $token = $vimeo->getAccessToken($_REQUEST['oauth_verifier']);

            // Store
            $_SESSION['oauth_access_token'] = $token['oauth_token'];
            $_SESSION['oauth_access_token_secret'] = $token['oauth_token_secret'];
            $_SESSION['vimeo_state'] = 'done';

            // Set the token
            $vimeo->setToken($_SESSION['oauth_access_token'], $_SESSION['oauth_access_token_secret']);
        }

        // Do an authenticated call
        try {
            $videos = $vimeo->call('vimeo.videos.getUploaded');
        }
        catch (VimeoAPIException $e) {
            echo "Encountered an API error -- code {$e->getCode()} - {$e->getMessage()}";
        }

        break;
}

?>


<?php 
/*
 * A Design by W3layouts
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
 *
 */
include "app/config.php";
include "app/detect.php";

if ($page_name=='') {
	include $browser_t.'/index.html';
	}
elseif ($page_name=='index.html') {
	include $browser_t.'/index.html';
	}
elseif ($page_name=='about.html') {
	include $browser_t.'/about.html';
	}
elseif ($page_name=='gallery.html') {
	include $browser_t.'/gallery.html';
	}
elseif ($page_name=='services.html') {
	include $browser_t.'/services.html';
	}
elseif ($page_name=='blog.html') {
	include $browser_t.'/blog.html';
	}
elseif ($page_name=='contact.html') {
	include $browser_t.'/contact.html';
	}
elseif ($page_name=='404.html') {
	include $browser_t.'/404.html';
	}
elseif ($page_name=='contact-post.html') {
	include $browser_t.'/contact.html';
	include 'app/contact.php';
	}
else
	{
		include $browser_t.'/404.html';
	}

?>
