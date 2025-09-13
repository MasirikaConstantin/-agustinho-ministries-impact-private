<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="{{ asset('logo/logo-background.ico') }}" sizes="any">
        <link rel="apple-touch-icon" href="{{ asset('logo/logo-background.ico') }}">

        
        <meta property="og:image" content="{{ asset('logo/logo-background.ico') }}">
        <meta property="og:image:width" content="512">
        <meta property="og:image:height" content="512">
        <meta property="og:image:alt" content="Fondation Agustinho Meschak M. MINISTRIES">
        <meta name="twitter:image" content="{{ asset('logo/logo-background.ico') }}">
        <meta name="description" content="La Fondation Agustinho Meschak M. MINISTRIES est une organisation à but non lucratif engagée dans le développement humain, la promotion de l'éducation, l'amélioration de la santé et l'action philanthropique." />

        <meta name="twitter:image:alt" content="Fondation Agustinho Meschak M. MINISTRIES">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=comfortaa:400" rel="stylesheet" />

        <style>
            @import url(https://fonts.bunny.net/css?family=abel:400|comfortaa:400);
            @font-face {
                font-family: 'Abel', sans-serif;
              
           }

           body {
            font-family: 'Comfortaa', display !important;

           
           }
       </style>
       
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-content antialiased">
        @inertia
    </body>        

</html>
