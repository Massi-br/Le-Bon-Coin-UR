<?php

namespace ContainerX9fUdKp;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getCreateAnnoncesService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\API\CreateAnnonces' shared autowired service.
     *
     * @return \App\Controller\API\CreateAnnonces
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/API/CreateAnnonces.php';

        $container->services['App\\Controller\\API\\CreateAnnonces'] = $instance = new \App\Controller\API\CreateAnnonces();

        $instance->setContainer(($container->privates['.service_locator.jUv.zyj'] ?? $container->load('get_ServiceLocator_JUv_ZyjService'))->withContext('App\\Controller\\API\\CreateAnnonces', $container));

        return $instance;
    }
}