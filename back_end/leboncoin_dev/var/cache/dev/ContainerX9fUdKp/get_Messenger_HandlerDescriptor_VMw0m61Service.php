<?php

namespace ContainerX9fUdKp;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_Messenger_HandlerDescriptor_VMw0m61Service extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.messenger.handler_descriptor.vMw0m61' shared service.
     *
     * @return \Symfony\Component\Messenger\Handler\HandlerDescriptor
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/messenger/Handler/HandlerDescriptor.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/notifier/Messenger/MessageHandler.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/notifier/Transport/TransportInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/notifier/Transport/Transports.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/notifier/Transport.php';

        return $container->privates['.messenger.handler_descriptor.vMw0m61'] = new \Symfony\Component\Messenger\Handler\HandlerDescriptor(new \Symfony\Component\Notifier\Messenger\MessageHandler((new \Symfony\Component\Notifier\Transport(new RewindableGenerator(function () use ($container) {
            yield 0 => ($container->privates['notifier.transport_factory.null'] ?? $container->load('getNotifier_TransportFactory_NullService'));
        }, 1)))->fromStrings([])), []);
    }
}
