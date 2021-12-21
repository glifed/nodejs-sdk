import * as cloudApi from '.'
export const SttServiceClient = cloudApi.ai.stt.SttServiceClient;
export const TranslationServiceClient = cloudApi.ai.translate_translation.TranslationServiceClient;
export const SynthesizerClient = cloudApi.ai.tts.SynthesizerClient;
export const VisionServiceClient = cloudApi.ai.vision.VisionServiceClient;
export const BackendGroupServiceClient = cloudApi.apploadbalancer.backend_group.BackendGroupServiceClient;
export const HttpRouterServiceClient = cloudApi.apploadbalancer.http_router.HttpRouterServiceClient;
export const LoadBalancerServiceClient = cloudApi.apploadbalancer.load_balancer.LoadBalancerServiceClient;
export const AlbTargetGroupServiceClient = cloudApi.apploadbalancer.target_group.TargetGroupServiceClient;
export const VirtualHostServiceClient = cloudApi.apploadbalancer.virtual_host.VirtualHostServiceClient;
export const BillingAccountServiceClient = cloudApi.billing.billing_account.BillingAccountServiceClient;
export const BudgetServiceClient = cloudApi.billing.budget.BudgetServiceClient;
export const CustomerServiceClient = cloudApi.billing.customer.CustomerServiceClient;
export const ServiceServiceClient = cloudApi.billing.service.ServiceServiceClient;
export const SkuServiceClient = cloudApi.billing.sku.SkuServiceClient;
export const CacheServiceClient = cloudApi.cdn.cache.CacheServiceClient;
export const OriginGroupServiceClient = cloudApi.cdn.origin_group.OriginGroupServiceClient;
export const OriginServiceClient = cloudApi.cdn.origin.OriginServiceClient;
export const ProviderServiceClient = cloudApi.cdn.provider.ProviderServiceClient;
export const ResourceServiceClient = cloudApi.cdn.resource.ResourceServiceClient;
export const CertificateContentServiceClient = cloudApi.certificatemanager.certificate_content.CertificateContentServiceClient;
export const CertificateServiceClient = cloudApi.certificatemanager.certificate.CertificateServiceClient;
export const DiskPlacementGroupServiceClient = cloudApi.compute.disk_placement_group.DiskPlacementGroupServiceClient;
export const DiskServiceClient = cloudApi.compute.disk.DiskServiceClient;
export const DiskTypeServiceClient = cloudApi.compute.disk_type.DiskTypeServiceClient;
export const FilesystemServiceClient = cloudApi.compute.filesystem.FilesystemServiceClient;
export const HostGroupServiceClient = cloudApi.compute.host_group.HostGroupServiceClient;
export const HostTypeServiceClient = cloudApi.compute.host_type.HostTypeServiceClient;
export const ComputeImageServiceClient = cloudApi.compute.image.ImageServiceClient;
export const InstanceServiceClient = cloudApi.compute.instance.InstanceServiceClient;
export const PlacementGroupServiceClient = cloudApi.compute.placement_group.PlacementGroupServiceClient;
export const SnapshotServiceClient = cloudApi.compute.snapshot.SnapshotServiceClient;
export const ZoneServiceClient = cloudApi.compute.zone.ZoneServiceClient;
export const InstanceGroupServiceClient = cloudApi.compute.instance_group.InstanceGroupServiceClient;
export const CrImageServiceClient = cloudApi.containerregistry.image.ImageServiceClient;
export const LifecyclePolicyServiceClient = cloudApi.containerregistry.lifecycle_policy.LifecyclePolicyServiceClient;
export const RegistryServiceClient = cloudApi.containerregistry.registry.RegistryServiceClient;
export const RepositoryServiceClient = cloudApi.containerregistry.repository.RepositoryServiceClient;
export const ScannerServiceClient = cloudApi.containerregistry.scanner.ScannerServiceClient;
export const DataProcClusterServiceClient = cloudApi.dataproc.cluster.ClusterServiceClient;
export const JobServiceClient = cloudApi.dataproc.job.JobServiceClient;
export const ResourcePresetServiceClient = cloudApi.dataproc.resource_preset.ResourcePresetServiceClient;
export const SubclusterServiceClient = cloudApi.dataproc.subcluster.SubclusterServiceClient;
export const ManagerJobServiceClient = cloudApi.dataproc.manager_job.JobServiceClient;
export const DataprocManagerServiceClient = cloudApi.dataproc.manager.DataprocManagerServiceClient;
export const AppTokenServiceClient = cloudApi.datasphere.app_token.AppTokenServiceClient;
export const FolderBudgetServiceClient = cloudApi.datasphere.folder_budget.FolderBudgetServiceClient;
export const NodeServiceClient = cloudApi.datasphere.node.NodeServiceClient;
export const ProjectDataServiceClient = cloudApi.datasphere.project_data.ProjectDataServiceClient;
export const ProjectServiceClient = cloudApi.datasphere.project.ProjectServiceClient;
export const EndpointServiceClient = cloudApi.datatransfer.endpoint.EndpointServiceClient;
export const TransferServiceClient = cloudApi.datatransfer.transfer.TransferServiceClient;
export const DnsZoneServiceClient = cloudApi.dns.dns_zone.DnsZoneServiceClient;
export const ApiEndpointServiceClient = cloudApi.endpoint.api_endpoint.ApiEndpointServiceClient;
export const ApiKeyServiceClient = cloudApi.iam.api_key.ApiKeyServiceClient;
export const IamTokenServiceClient = cloudApi.iam.iam_token.IamTokenServiceClient;
export const KeyServiceClient = cloudApi.iam.key.KeyServiceClient;
export const RoleServiceClient = cloudApi.iam.role.RoleServiceClient;
export const ServiceAccountServiceClient = cloudApi.iam.service_account.ServiceAccountServiceClient;
export const UserAccountServiceClient = cloudApi.iam.user_account.UserAccountServiceClient;
export const YandexPassportUserAccountServiceClient = cloudApi.iam.yandex_passport_user_account.YandexPassportUserAccountServiceClient;
export const AccessKeyServiceClient = cloudApi.iam.access_key.AccessKeyServiceClient;
export const DeviceDataServiceClient = cloudApi.iot.devices_device_data.DeviceDataServiceClient;
export const DeviceServiceClient = cloudApi.iot.devices_device.DeviceServiceClient;
export const RegistryDataServiceClient = cloudApi.iot.devices_registry_data.RegistryDataServiceClient;
export const IotRegistryServiceClient = cloudApi.iot.devices_registry.RegistryServiceClient;
export const K8sClusterServiceClient = cloudApi.k8s.cluster.ClusterServiceClient;
export const NodeGroupServiceClient = cloudApi.k8s.node_group.NodeGroupServiceClient;
export const VersionServiceClient = cloudApi.k8s.version.VersionServiceClient;
export const SymmetricCryptoServiceClient = cloudApi.kms.symmetric_crypto.SymmetricCryptoServiceClient;
export const SymmetricKeyServiceClient = cloudApi.kms.symmetric_key.SymmetricKeyServiceClient;
export const NetworkLoadBalancerServiceClient = cloudApi.loadbalancer.network_load_balancer.NetworkLoadBalancerServiceClient;
export const TargetGroupServiceClient = cloudApi.loadbalancer.target_group.TargetGroupServiceClient;
export const PayloadServiceClient = cloudApi.lockbox.payload.PayloadServiceClient;
export const SecretServiceClient = cloudApi.lockbox.secret.SecretServiceClient;
export const LogGroupServiceClient = cloudApi.logging.log_group.LogGroupServiceClient;
export const LogIngestionServiceClient = cloudApi.logging.log_ingestion.LogIngestionServiceClient;
export const LogReadingServiceClient = cloudApi.logging.log_reading.LogReadingServiceClient;
export const ImageProductUsageServiceClient = cloudApi.marketplace.image_product_usage.ImageProductUsageServiceClient;
export const ClickHouseBackupServiceClient = cloudApi.mdb.clickhouse_backup.BackupServiceClient;
export const ClickHouseClusterServiceClient = cloudApi.mdb.clickhouse_cluster.ClusterServiceClient;
export const DatabaseServiceClient = cloudApi.mdb.clickhouse_database.DatabaseServiceClient;
export const FormatSchemaServiceClient = cloudApi.mdb.clickhouse_format_schema.FormatSchemaServiceClient;
export const MlModelServiceClient = cloudApi.mdb.clickhouse_ml_model.MlModelServiceClient;
export const ClickHouseResourcePresetServiceClient = cloudApi.mdb.clickhouse_resource_preset.ResourcePresetServiceClient;
export const ClickHouseUserServiceClient = cloudApi.mdb.clickhouse_user.UserServiceClient;
export const VersionsServiceClient = cloudApi.mdb.clickhouse_versions.VersionsServiceClient;
export const AuthServiceClient = cloudApi.mdb.elasticsearch_auth.AuthServiceClient;
export const ElasticClusterServiceClient = cloudApi.mdb.elasticsearch_cluster.ClusterServiceClient;
export const ElasticResourcePresetServiceClient = cloudApi.mdb.elasticsearch_resource_preset.ResourcePresetServiceClient;
export const ElasticUserServiceClient = cloudApi.mdb.elasticsearch_user.UserServiceClient;
export const GreenplumClusterServiceClient = cloudApi.mdb.greenplum_cluster.ClusterServiceClient;
export const KafkaClusterServiceClient = cloudApi.mdb.kafka_cluster.ClusterServiceClient;
export const ConnectorServiceClient = cloudApi.mdb.kafka_connector.ConnectorServiceClient;
export const KafkaResourcePresetServiceClient = cloudApi.mdb.kafka_resource_preset.ResourcePresetServiceClient;
export const TopicServiceClient = cloudApi.mdb.kafka_topic.TopicServiceClient;
export const KafkaUserServiceClient = cloudApi.mdb.kafka_user.UserServiceClient;
export const MongoBackupServiceClient = cloudApi.mdb.mongodb_backup.BackupServiceClient;
export const MongoClusterServiceClient = cloudApi.mdb.mongodb_cluster.ClusterServiceClient;
export const MongoDatabaseServiceClient = cloudApi.mdb.mongodb_database.DatabaseServiceClient;
export const MongoResourcePresetServiceClient = cloudApi.mdb.mongodb_resource_preset.ResourcePresetServiceClient;
export const MongoUserServiceClient = cloudApi.mdb.mongodb_user.UserServiceClient;
export const MysqlBackupServiceClient = cloudApi.mdb.mysql_backup.BackupServiceClient;
export const MysqlClusterServiceClient = cloudApi.mdb.mysql_cluster.ClusterServiceClient;
export const MysqlDatabaseServiceClient = cloudApi.mdb.mysql_database.DatabaseServiceClient;
export const MysqlResourcePresetServiceClient = cloudApi.mdb.mysql_resource_preset.ResourcePresetServiceClient;
export const MysqlUserServiceClient = cloudApi.mdb.mysql_user.UserServiceClient;
export const PgsqlBackupServiceClient = cloudApi.mdb.postgresql_backup.BackupServiceClient;
export const PgsqlClusterServiceClient = cloudApi.mdb.postgresql_cluster.ClusterServiceClient;
export const PgsqlDatabaseServiceClient = cloudApi.mdb.postgresql_database.DatabaseServiceClient;
export const PgsqlResourcePresetServiceClient = cloudApi.mdb.postgresql_resource_preset.ResourcePresetServiceClient;
export const PgsqlUserServiceClient = cloudApi.mdb.postgresql_user.UserServiceClient;
export const RedisBackupServiceClient = cloudApi.mdb.redis_backup.BackupServiceClient;
export const RedisClusterServiceClient = cloudApi.mdb.redis_cluster.ClusterServiceClient;
export const RedisResourcePresetServiceClient = cloudApi.mdb.redis_resource_preset.ResourcePresetServiceClient;
export const SqlServerBackupServiceClient = cloudApi.mdb.sqlserver_backup.BackupServiceClient;
export const SqlServerClusterServiceClient = cloudApi.mdb.sqlserver_cluster.ClusterServiceClient;
export const SqlServerDatabaseServiceClient = cloudApi.mdb.sqlserver_database.DatabaseServiceClient;
export const SqlServerResourcePresetServiceClient = cloudApi.mdb.sqlserver_resource_preset.ResourcePresetServiceClient;
export const SqlServerUserServiceClient = cloudApi.mdb.sqlserver_user.UserServiceClient;
export const OperationServiceClient = cloudApi.operation.operation.OperationServiceClient;
export const OrganizationServiceClient = cloudApi.organizationmanager.organization.OrganizationServiceClient;
export const UserServiceClient = cloudApi.organizationmanager.user.UserServiceClient;
export const OmCertificateServiceClient = cloudApi.organizationmanager.certificate.CertificateServiceClient;
export const FederationServiceClient = cloudApi.organizationmanager.federation.FederationServiceClient;
export const CloudServiceClient = cloudApi.resourcemanager.cloud.CloudServiceClient;
export const FolderServiceClient = cloudApi.resourcemanager.folder.FolderServiceClient;
export const ApiGatewayServiceClient = cloudApi.serverless.apigateway.ApiGatewayServiceClient;
export const ContainerServiceClient = cloudApi.serverless.containers_container.ContainerServiceClient;
export const FunctionServiceClient = cloudApi.serverless.functions_function.FunctionServiceClient;
export const ProxyServiceClient = cloudApi.serverless.mdbproxy_proxy.ProxyServiceClient;
export const TriggerServiceClient = cloudApi.serverless.triggers_trigger.TriggerServiceClient;
export const AddressServiceClient = cloudApi.vpc.address.AddressServiceClient;
export const NetworkServiceClient = cloudApi.vpc.network.NetworkServiceClient;
export const RouteTableServiceClient = cloudApi.vpc.route_table.RouteTableServiceClient;
export const SecurityGroupServiceClient = cloudApi.vpc.security_group.SecurityGroupServiceClient;
export const SubnetServiceClient = cloudApi.vpc.subnet.SubnetServiceClient;
export const YdbBackupServiceClient = cloudApi.ydb.backup.BackupServiceClient;
export const YdbDatabaseServiceClient = cloudApi.ydb.database.DatabaseServiceClient;
export const LocationServiceClient = cloudApi.ydb.location.LocationServiceClient;
export const YdbResourcePresetServiceClient = cloudApi.ydb.resource_preset.ResourcePresetServiceClient;
export const StorageTypeServiceClient = cloudApi.ydb.storage_type.StorageTypeServiceClient;