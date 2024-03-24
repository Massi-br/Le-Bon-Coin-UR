<?php

namespace ContainerX9fUdKp;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getConsole_Command_MessengerFailedMessagesRetryService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'console.command.messenger_failed_messages_retry' shared service.
     *
     * @return \Symfony\Component\Messenger\Command\FailedMessagesRetryCommand
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/console/Command/Command.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/messenger/Command/AbstractFailedMessagesCommand.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/console/Command/SignalableCommandInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/messenger/Command/FailedMessagesRetryCommand.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/messenger/Transport/Serialization/SerializerInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/messenger/Transport/Serialization/PhpSerializer.php';

        $container->privates['console.command.messenger_failed_messages_retry'] = $instance = new \Symfony\Component\Messenger\Command\FailedMessagesRetryCommand('failed', ($container->privates['.service_locator.Y4J.A.e'] ?? $container->load('get_ServiceLocator_Y4J_A_EService')), ($container->privates['messenger.routable_message_bus'] ?? $container->load('getMessenger_RoutableMessageBusService')), ($container->services['event_dispatcher'] ?? self::getEventDispatcherService($container)), ($container->privates['monolog.logger.messenger'] ?? $container->load('getMonolog_Logger_MessengerService')), ($container->privates['messenger.transport.native_php_serializer'] ??= new \Symfony\Component\Messenger\Transport\Serialization\PhpSerializer()), NULL);

        $instance->setName('messenger:failed:retry');
        $instance->setDescription('Retry one or more messages from the failure transport');

        return $instance;
    }
}
