<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita7e5e1ec8f8cadaf26ffb170fc90f62d
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita7e5e1ec8f8cadaf26ffb170fc90f62d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita7e5e1ec8f8cadaf26ffb170fc90f62d::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}